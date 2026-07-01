# PhD Position F/M Frugal Distributed Training with Volatile Resources

**University:** Inria
**Location:** Paris, France
**Deadline:** Jun 21, 2026

### Contact
- Email: Giovanni.Neglia@inria.fr

### Summary
PhD position in AI focused on scalable
            training algorithms for distributed environments. Candidates need a strong mathematical background and
            programming skills.


### Full Position Description

[Original Link](https://www.phdscanner.com/opportunities/phd-vacancies-inria-france-phd-position-fm-frugal-distributed-training-with-volatile-resources-e2e00258-7e35-45bf-bce6-36c165b3e563)

Download job offer in PDF format 

Contract type : 
	        	Fixed-term contract

Level of qualifications required : 
	        	Graduate degree or equivalent

Fonction : 
	        	PhD Position

### About the research centre or Inria department

Inria is the French National Institute for Research in Digital Science, of which the Inria Côte d&#39;Azur University Center is a part. With strong expertise in computer science and applied mathematics, the research projects of the Inria Côte d&#39;Azur University Center cover all aspects of digital science and technology and generate innovation. Based mainly in Sophia Antipolis, but also in Nice and Montpellier, it brings together 47 research teams and nine support services. It is active in the fields of artificial intelligence, data science, IT system security, robotics, network engineering, natural risk prevention, ecological transition, digital biology, computational neuroscience, health data, and more. The Inria Center at Université Côte d&#39;Azur is a major player in terms of scientific excellence, thanks to the results it has achieved and its collaborations at both European and international level.

### Context

This PhD thesis is part of the Inria–Hivenet Challenge Cupseli: Collaborative Unified Platform for a Scalable and Efficient Learning Infrastructure. Hivenet, which will soon become Antimatter, aims to develop scalable, efficient, and secure solutions for running AI training and inference workloads on distributed, heterogeneous, and volatile computing resources.

The PhD candidate will be hired by Hivenet and hosted mostly by the NEO project-team at the Inria Centre at Université Côte d’Azur, in Sophia Antipolis. The thesis will be carried out in close collaboration with the Inria ARGO project-team and with Hivenet engineers. The work will focus on the design of new distributed training algorithms tailored to environments where participants share computing and storage resources only for limited periods of time.

The research activity will be supervised by:

Giovanni Neglia, Inria NEO, https://www-sop.inria.fr/members/Giovanni.Neglia/Laurent Massoulié, Inria ARGO, https://www.di.ens.fr/laurent.massoulie/Igor Carrara, Hivenet / Antimatter, https://www.linkedin.com/in/carraraig/

The candidate will benefit from a highly interdisciplinary environment combining expertise in machine learning, distributed optimization, federated learning, stochastic systems, and large-scale distributed infrastructures.

### Assignment

### Context

The Hivenet distributed platform allows participants to share computing and storage resources for limited periods of time. These resources may become available only at specific moments, or may be withdrawn unexpectedly. This creates a highly dynamic training environment, where the system must continuously decide which resources to use, when to use them, and how to exploit them efficiently.

This challenge is closely related to cross-device federated learning, where client participation often depends on external constraints such as battery level, WiFi connectivity, device usage, or time-of-day patterns. In operational federated learning systems, volatility is often handled by recruiting a large number of clients at each training round and proceeding once enough responses have been received. While effective at large scale, this strategy can be inefficient and may introduce statistical biases in the learning process.

The Hivenet setting differs from standard cross-device federated learning in several important ways. First, the number of available participants may be smaller, making it costly or impossible to rely on massive redundancy. Second, while federated learning usually assumes that data cannot be moved across clients, Hivenet may allow portions of data to be transferred to selected participants. Third, the availability of Hivenet resources may sometimes be known in advance or predicted with some accuracy, creating new opportunities for resource-aware training algorithms.

Beyond training time and model accuracy, such systems also raise questions of energy efficiency and environmental impact. Recent work on carbon-aware federated learning has shown that client and time-slot scheduling can exploit temporal and geographical variations in carbon intensity to reduce the carbon footprint of training [arputharaj25]. This perspective is particularly relevant in a distributed infrastructure such as Hivenet, where resource availability, energy characteristics, and communication conditions may vary significantly over time.

These specific features call for new distributed learning methods that jointly account for statistical efficiency, system constraints, resource availability, communication cost, and, when relevant, energy or carbon-related criteria.

### Research objectives

The objective of this PhD is to develop new distributed training algorithms for volatile and resource-constrained environments such as Hivenet, taking into account not only training time and accuracy, but also communication cost and, when relevant, energy or carbon-related objectives.

A first objective will be to model the availability of participating resources. The candidate will study how to characterize resource availability patterns using real-world traces, measurements, or insights from Hivenet engineers. This modeling phase will aim to capture both predictable availability, such as daily or weekly patterns, and unpredictable events, such as sudden resource withdrawals.

A second objective will be to design training algorithms that exploit these availability models. The algorithms will decide which resources should participate in training, when they should be activated, and how they should be used. In particular, the thesis will study questions such as how much data should be transferred to a participant, how many local model updates should be performed before communication, and how to balance computation, communication, and statistical progress.

A third objective will be to provide theoretical guarantees for the proposed methods. The candidate will analyze the convergence and training-time performance of distributed learning algorithms under intermittent, heterogeneous, and possibly predictable resource availability. A particular focus will be placed on understanding the trade-off between redundancy, communication cost, local computation, and bias induced by non-uniform participation.

A fourth objective will be to investigate frugal and sustainable training strategies. Building on recent work on client scheduling, intermittent availability, and carbon-aware federated learning [cho22, ribero23, rodio24, arputharaj25], the thesis will study how to schedule training across clients and time slots in order to reduce unnecessary computation, exploit favorable availability periods, and possibly lower the carbon impact of training without significantly degrading accuracy or increasing completion time.

A fifth objective will be to evaluate the proposed algorithms experimentally. The methods will first be tested in simulation on standard machine learning datasets and controlled availability models. In a second phase, the most promising algorithms will be evaluated in conditions closer to the Hivenet system, with the goal of assessing their practical performance and deployment potential.

Overall, the thesis aims to contribute to a new generation of frugal distributed training algorithms: algorithms that avoid unnecessary redundancy, exploit predictable resource availability, and make efficient use of heterogeneous resources while preserving learning accuracy.

### References

[mcmahan17] B. McMahan, E. Moore, D. Ramage, S. Hampson, and B. Aguera y Arcas. Communication-efficient learning of deep networks from decentralized data. In Artificial Intelligence and Statistics, PMLR, 2017.

[li20] T. Li, A. K. Sahu, A. Talwalkar, and V. Smith. Federated learning: Challenges, methods, and future directions. IEEE Signal Processing Magazine, 37(3), 2020.

[cho22] Y. J. Cho, J. Wang, and G. Joshi. Towards understanding biased client selection in federated learning. In AISTATS, 2022.

[ribero23] M. Ribero, H. Vikalo, and G. de Veciana. Federated learning under intermittent client availability and time-varying communication constraints. IEEE Journal of Selected Topics in Signal Processing, 17(1), 2023.

[rodio24] A. Rodio, F. Faticanti, O. Marfoq, G. Neglia, and E. Leonardi. Federated learning under heterogeneous and correlated client availability. IEEE/ACM Transactions on Networking, 32(2), 2024.

[eichner19] H. Eichner, T. Koren, B. McMahan, N. Srebro, and K. Talwar. Semi-cyclic stochastic gradient descent. In ICML, 2019.

[cho23] Y. J. Cho, P. Sharma, G. Joshi, Z. Xu, S. Kale, and T. Zhang. On the convergence of federated averaging with cyclic client participation. In ICML, 2023.

[arputharaj25] D. R. Arputharaj, C. Rodriguez, A. Rodio, and G. Neglia. Green Federated Learning via Carbon-Aware Client and Time Slot Scheduling. In 33rd International Symposium on Modeling, Analysis and Simulation of Computer and Telecommunication Systems (MASCOTS), 2025.

### Main activities

Research.

Master-level course teaching and Master student supervision possible if the candidate is interested.

### Skills

The candidate should have a solid mathematical background, in particular in optimization, probability, stochastic processes, or statistical machine learning. A strong interest in distributed systems and resource-aware machine learning is expected.

Good programming skills are required, preferably in Python. Previous experience with PyTorch, TensorFlow, JAX, or simulation of distributed learning systems is a plus. Knowledge of federated learning, distributed optimization, stochastic modeling, scheduling algorithms, or energy-aware computing would be appreciated.

The candidate should be motivated by both theoretical analysis and experimental validation, and should be interested in designing algorithms that address real constraints arising in distributed AI infrastructures.

Fluency in English is expected.

### Benefits package

- Subsidized meals

- Partial reimbursement of public transport costs

- Leave: 7 weeks of annual leave + 10 extra days off due to RTT (statutory reduction in working hours) + possibility of exceptional leave (sick children, moving home, etc.)

- Possibility of teleworking (after 6 months of employment) and flexible organization of working hours

- Professional equipment available (videoconferencing, loan of computer equipment, etc.)

- Social, cultural and sports events and activities

- Access to vocational training

- Social security coverage

### Remuneration

Duration: 36 months Location: Sophia Antipolis, France Gross Salary per month: 2300 €

### General Information

- Theme/Domain :
											Optimization, machine learning and statistical methods

											System & Networks
													(BAP E)

- Town/city :
			Sophia Antipolis

- Inria Center :

					Centre Inria d&#39;Université Côte d&#39;Azur 

- Starting date :
				2026-10-01

- Duration of contract :
					3 years

- Deadline to apply :
			2026-06-21

			 Warning : you must enter your e-mail address in order to save your application to Inria. Applications must be submitted online on the Inria website. Processing of applications sent from other channels is not guaranteed.

### Instruction to apply

				Defence Security : 

				This position is likely to be situated in a restricted area (ZRR), as defined in Decree No. 2011-1425 relating to the protection of national scientific and technical potential (PPST).Authorisation to enter an area is granted by the director of the unit, following a favourable Ministerial decision, as defined in the decree of 3 July 2012 relating to the PPST. An unfavourable Ministerial decision in respect of a position situated in a ZRR would result in the cancellation of the appointment.

				 Recruitment Policy :

				As part of its diversity policy, all Inria positions are accessible to people with disabilities.

### Contacts

- Inria Team :

					NEO 

PhD Supervisor :

			Neglia Giovanni
			/
			Giovanni.Neglia@inria.fr

### About Inria

									Inria is the French national research institute dedicated to digital science and technology. It employs 2,600 people. Its 200 agile project teams, generally run jointly with academic partners, include more than 3,500 scientists and engineers working to meet the challenges of digital technology, often at the interface with other disciplines. The Institute also employs numerous talents in over forty different professions. 900 research support staff contribute to the preparation and development of scientific and entrepreneurial projects that have a worldwide impact.

                        I create my account

								Register

							I already have an account!

	        	        		 Sign in

                Cancel 

 -->
