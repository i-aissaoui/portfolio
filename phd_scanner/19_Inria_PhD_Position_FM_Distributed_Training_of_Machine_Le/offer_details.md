# PhD Position F/M Distributed Training of Machine Learning Models with Malicious Clients

**University:** Inria
**Location:** Paris, France
**Deadline:** Jun 21, 2026

### Contact
- Email: Giovanni.Neglia@inria.fr

### Summary
This PhD position focuses on privacy
            and security in federated learning, requiring a solid mathematical and programming background. The candidate
            will work on advanced privacy attack strategies and defenses.


### Full Position Description

[Original Link](https://www.phdscanner.com/opportunities/phd-vacancies-inria-france-phd-position-fm-distributed-training-of-machine-learning-models-with-malicious-clients-af83d9f6-148a-4ff3-b975-cd2694385902)

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

This PhD thesis is part of the Inria–Hivenet Challenge Cupseli: Collaborative Unified Platform for a Scalable and Efficient Learning Infrastructure. Cupseli aims to enable large-scale AI training and inference on distributed, heterogeneous, and potentially volatile computing resources, while preserving security, privacy, and performance.

The PhD candidate will be hired by Hivenet (soon to become Antimatter) in Cannes, but mostly hosted at the Inria Centre at Université Côte d’Azur, in Sophia Antipolis, and will work in the Inria team NEO, as well as with Hivenet. The thesis is part of the Security and Privacy axis of Cupseli, which focuses on protecting distributed learning systems against malicious behavior and information leakage.

The research activity will be supervised by:

Chuan Xu, Inria, https://sites.google.com/view/chuanxuGiovanni Neglia, https://www-sop.inria.fr/members/Giovanni.Neglia/Igor Carrara, Hivenet, https://www.linkedin.com/in/carraraig/

### Assignment

### Context

Federated Learning (FL) enables a large number of devices, such as smartphones, sensors, or connected objects, to collaboratively train a shared machine learning model while keeping their data local [mcmahan17, li20]. This paradigm reduces the need to centralize sensitive data and has already been deployed in real-world applications, for example for mobile keyboard prediction [hard18].

However, decentralizing the training process does not automatically guarantee security or privacy. In federated and distributed learning systems, the participating clients are no longer passive data holders: they compute model updates and influence the training dynamics. As a consequence, a malicious client may try to corrupt the final model, slow down convergence, or extract private information from other participants.

Several attacks have already shown that malicious participants can severely affect FL systems. Model-poisoning attacks can degrade performance by flipping labels, manipulating gradients, or crafting malicious updates that bypass robust aggregation rules [baruch19, fang20, xie20, xie25]. Backdoor attacks can implant hidden behaviors in the trained model, which are activated only by specific inputs chosen by the attacker [wang20, lyu23]. Beyond integrity attacks, malicious clients may also exploit the collaborative training process to infer sensitive information about other participants. For instance, they may infer whether a particular property is present in another client’s dataset [melis19], or train local generators to reconstruct class-level information from a target participant [hitaj17].

The central question of this PhD is the following: how much private information can a malicious participant extract while keeping its poisoned update sufficiently small or stealthy to avoid detection? Answering this question is essential for designing distributed learning systems that are not only robust to performance degradation, but also resilient to privacy attacks carried out by active participants.

### Research objectives

The goal of this PhD is to study privacy vulnerabilities in federated and distributed training systems in the presence of malicious clients, and to design principled defenses against them.

A first objective will be to advance existing privacy attacks in distributed learning. The candidate will investigate how a malicious participant can manipulate its local training objective or model update in order to extract richer private information from honest clients. The focus will go beyond recovering simple class-level representations, with the goal of understanding what information can be inferred about individual samples, data properties, or local data distributions.

A second objective will be to study stealthy model-poisoning attacks. In practical systems, malicious updates are often constrained by anomaly detection, robust aggregation, clipping, or validation mechanisms. The thesis will therefore consider bounded poisoning models, where the attacker is restricted to a neighborhood of legitimate updates. This will make it possible to analyze attacks that are powerful enough to leak private information, but sufficiently small to remain hard to detect.

A third objective will be to design and evaluate defenses. The thesis will study how existing mechanisms such as robust aggregation, clipping, anomaly detection, regularization, privacy-preserving training, or client-side validation can mitigate privacy leakage induced by malicious participants. When existing defenses are insufficient, the candidate will propose new methods that explicitly account for the trade-off between privacy protection, robustness, and final model accuracy.

The work will combine theoretical analysis with experimental validation. The candidate will implement attacks and defenses in controlled simulation environments for federated and distributed learning, using standard machine learning datasets and relevant threat models. The empirical study will evaluate both the utility of the trained model and the effectiveness of the attacks and defenses, with particular attention to stealthiness and practical detectability.

### References

[mcmahan17] B. McMahan, E. Moore, D. Ramage, S. Hampson, and B. Aguera y Arcas. Communication-efficient learning of deep networks from decentralized data. In Artificial Intelligence and Statistics, PMLR, 2017.

[li20] T. Li, A. K. Sahu, A. Talwalkar, and V. Smith. Federated learning: Challenges, methods, and future directions. IEEE Signal Processing Magazine, 37(3), 2020.

[hard18] A. Hard, K. Rao, R. Mathews, S. Ramaswamy, F. Beaufays, S. Augenstein, H. Eichner, C. Kiddon, and D. Ramage. Federated learning for mobile keyboard prediction. arXiv preprint arXiv:1811.03604, 2018.

[fang20] M. Fang, X. Cao, J. Jia, and N. Gong. Local model poisoning attacks to Byzantine-robust federated learning. USENIX Security, 2020.

[baruch19] G. Baruch, M. Baruch, and Y. Goldberg. A Little Is Enough: Circumventing Defenses for Distributed Learning. NeurIPS, 2019.

[xie20] C. Xie, O. Koyejo, and I. Gupta. Fall of Empires: Breaking Byzantine-tolerant SGD by Inner Product Manipulation. UAI, 2020.

[xie25] Y. Xie, M. Fang, and N. Gong. Model Poisoning Attacks to Federated Learning via Multi-Round Consistency. CVPR, 2025

[wang20] H. Wang, K. Sreenivasan, S. Rajput, H. Vishwakarma, S. Agarwal, J. Sohn, K. Lee, and D. Papailiopoulos. Attack of the tails: Yes, you really can backdoor federated learning. NeurIPS, 2020.

[lyu23] X. Lyu, Y. Han, W. Wang, J. Liu, B. Wang, J. Liu, and X. Zhang. Poisoning with Cerberus: Stealthy and Colluded Backdoor Attack against Federated Learning. AAAI, 2023.

[melis19] L. Melis, C. Song, E. De Cristofaro, and V. Shmatikov. Exploiting unintended feature leakage in collaborative learning. IEEE Symposium on Security and Privacy, 2019.

[hitaj17] B. Hitaj, G. Ateniese, and F. Perez-Cruz. Deep models under the GAN: Information leakage from collaborative deep learning. ACM CCS, 2017.

### Main activities

Research.

Possibility to teach at Master level and supervise Master students if interested.

### Skills

The candidate should have a solid mathematical background, in particular in probability, optimization, information theory, or statistical machine learning. A strong interest in privacy and security for machine learning is expected.

Good programming skills are required, preferably in Python. Previous experience with PyTorch, TensorFlow, JAX, or federated learning libraries is a plus. Knowledge of adversarial machine learning, privacy attacks, robust learning, or distributed optimization would be appreciated but is not mandatory.

The candidate should be able to work both theoretically and experimentally, and should be motivated by the design of rigorous models that can lead to practical insights for real distributed AI systems.

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
