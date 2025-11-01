declare module "ogl" {
  export class Renderer {
    constructor(options?: Record<string, unknown>);
    gl: WebGLRenderingContext & WebGL2RenderingContext;
    setSize(width: number, height: number): void;
    render(opts: Record<string, unknown>): void;
  }
  export class Program {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: Record<string, unknown>
    );
    uniforms: Record<string, WebGLUniformLocation | null>;
  }
  export class Mesh {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: Record<string, unknown>
    );
  }
  export class Color {
    constructor(r: number, g: number, b: number);
  }
  export class Triangle {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);
  }
}
