import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";

export type LogoItem =
  | {
    node: React.ReactNode;
    href?: string;
    title?: string;
    ariaLabel?: string;
  }
  | {
    src: string;
    alt?: string;
    href?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120, // pixels per second (approx)
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    // We duplicate logos enough to ensure seamless scrolling
    // A simple heuristic: duplicate 4 times usually covers wide screens unless list is tiny.
    const copies = [0, 1, 2, 3];

    const cssVariables = useMemo(
      () =>
      ({
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      } as React.CSSProperties),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          "relative overflow-hidden group",
          "[--logoloop-gap:32px]",
          "[--logoloop-logoHeight:28px]",
          "[--logoloop-fadeColorAuto:#ffffff]",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className
        ),
      [scaleOnHover, className]
    );

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = "node" in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              "inline-flex items-center",
              scaleOnHover &&
              "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            aria-hidden={
              !!(
                "href" in item &&
                item.href &&
                !("ariaLabel" in item && item.ariaLabel)
              )
            }
          >
            {"node" in item ? item.node : null}
          </span>
        ) : (
          <img
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
              "[-webkit-user-drag:none] pointer-events-none",
              "[image-rendering:-webkit-optimize-contrast]",
              scaleOnHover &&
              "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            src={"src" in item ? item.src : ""}
            srcSet={"srcSet" in item ? item.srcSet : undefined}
            sizes={"sizes" in item ? item.sizes : undefined}
            width={"width" in item ? item.width : undefined}
            height={"height" in item ? item.height : undefined}
            alt={"alt" in item ? item.alt ?? "" : ""}
            title={"title" in item ? item.title : undefined}
            loading='lazy'
            decoding='async'
            draggable={false}
          />
        );

        const inner =
          "href" in item && item.href ? (
            <a
              className={cx(
                "inline-flex items-center no-underline rounded",
                "transition-opacity duration-200 ease-linear",
                "hover:opacity-80",
                "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
              )}
              href={"href" in item ? item.href : undefined}
              target='_blank'
              rel='noreferrer noopener'
            >
              {content}
            </a>
          ) : (
            content
          );

        return (
          <li
            className={cx(
              "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",
              scaleOnHover && "overflow-visible group/item"
            )}
            key={key}
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover]
    );

    return (
      <div
        className={rootClasses}
        style={{ width: typeof width === 'number' ? `${width}px` : width, ...cssVariables, ...style }}
        aria-label={ariaLabel}
      >
        <style>{`
          @keyframes logoloop-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}</style>
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 left-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 right-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
          </>
        )}

        <div
          className={cx(
            "flex w-max",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `logoloop-scroll ${30000 / speed}s linear infinite`,
            flexDirection: direction === 'right' ? 'row-reverse' : 'row'
          }}
        >
          {copies.map((copyIndex) => (
            <ul
              key={copyIndex}
              className='flex items-center min-w-full shrink-0'
              aria-hidden={copyIndex > 0}
            >
              {logos.map((item, itemIndex) =>
                renderLogoItem(item, `${copyIndex}-${itemIndex}`)
              )}
            </ul>
          ))}
        </div>
      </div >
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
