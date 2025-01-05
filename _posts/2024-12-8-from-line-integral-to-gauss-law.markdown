---
layout: post
title:  "From Line Integral to Gauss's Law -- A Wonderful Connection Between Calculus and Physics"
categories: math
---

{% include mathjax.html %}

[PDF version for better reading experience](/pdf/line-integral-gauss-law.pdf)

Multivariable calculus is much more than ust calculus of more variables. There is an amazing connection between line integral and one of four greatest law of electromagnetism: Gauss's Law. In this article, we will start with the introduction of line integral, and eventually prove Gauss's Law.

## Chapter 0: Introduction

# Line Integral

Let $C$ be a curve, and $f:\mathbb{R}^2\rightarrow \mathbb{R}$ be a 2-variable function. Then, the line integral $\int_C f \ \mathrm{d} s$ represents the infinite sum of the function value along the path $C$. Formally,

$$ \int_C f \ \mathrm{d} s = \lim_{n\rightarrow\infty} \sum_{i=1}^n f(x_i,y_i) \Delta d_i,$$

where $(x_i,y_i)$ are points along the curve $C$, and $\Delta d_i$ is the distance between adjacent two points. The value of the line integral, if $C$ is parameterized by $\vec{r}(t) = \left< x(t),y(t) \right>$ where $a\leq t\leq b$, is

$$ \int_C f \ \mathrm{d} s = \int_a^b f(x(t),y(t)) \frac{\mathrm{d} s}{\mathrm{d} t} \ \mathrm{d} t,$$

where $\frac{\mathrm{d} s}{\mathrm{d} t} = \sqrt{x'(t)^2 + y'(t)^2}$. If $C$ is a closed curve, we denote the closed line integral as $\oint_C f \ \mathrm{d} s$.

# Vector Field and Line Integral

We all know that a vector combines multiple numbers, but what if there is an $n$-dimensional vector in every point of an $n$-dimensional space? We call such function 

$$ \vec{F}:\mathbb{R}^n \rightarrow \mathbb{R}^n $$ 

a **vector field**. We can also get line integral of a vector field. Let $C$ be a 2-dimensional curve parameterized by $\left< x(t),y(t) \right>$ where $a\leq t\leq b$. Then,

$$
\int_C \vec{F} \cdot \mathrm{d} \vec{r} 
= \int_C \vec{F} \cdot \vec{T} \ \mathrm{d} s 
= \int_a^b \vec{F}(\vec{r}(t)) \cdot \frac{\mathrm{d} \vec{r}}{\mathrm{d} t} \ \mathrm{d} t.
$$





## Chapter 1: Green's Theorem

Green's Theorem can turn a line integral into a double integral. Let $D$ be a continuous region in $\mathbb{R}^2$. We define $\partial D$ as the closed curve bounding region $D$. Let $\vec{F}:\mathbb{R}^2\rightarrow \mathbb{R}^2$ be a vector field such that $\vec{F}(x,y) = M(x,y) \hat{\imath} + N(x,y) \hat{\jmath}$, where $M,N$ are 2-variable functions. Green's Theorem states that

$$ \oint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{r} = \iint_D \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} A.$$

# Proof of Green's Theorem.

We first prove a special case, where the curve $\partial D$ consists of curve $C_1$ modeled by $y = f_1(x)$ and curve $C_2$ modeled by $y = f_2(x)$ with the domain $a\leq x\leq b$, where $f_1(x)$ and $f_2(x)$ are functions. Since $\partial D$ is a closed curve, we can infer that $f_1(a) = f_2(a)$ and $f_1(b) = f_2(b)$. Without loss of generality, we assume that $f_1(x) < f_2(x)$ for all $a\leq x\leq b$. Then,

$$
\iint_D \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} A
= \int_a^b \int_{f_1(x)}^{f_2(x)} \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} y \ \mathrm{d} x.
$$

Integrating $\frac{\partial M}{\partial y}$, we get

$$
\begin{aligned}
\int_a^b \int_{f_1(x)}^{f_2(x)}\frac{\partial M}{\partial y} \ \mathrm{d} y \ \mathrm{d} x
&= \int_a^b \left( M(x,f_2(x)) - M(x,f_1(x)) \right) \ \mathrm{d} x \\
&= - \int_b^a M(x,f_2(x))\ \mathrm{d} x - \int_a^b M(x,f_1(x))\ \mathrm{d} x \\
&= - \int_{C_2} M \ \mathrm{d} x - \int_{C_1} M \ \mathrm{d} x \\
&= - \oint_{\partial D} M \ \mathrm{d} x.
\end{aligned}
$$

Similarly, 

$$ \int_a^b \int_{f_1(x)}^{f_2(x)}\frac{\partial N}{\partial x} \ \mathrm{d} y \ \mathrm{d} x = \oint_{\partial D} N \ \mathrm{d} y.$$

Therefore,

$$ 
\begin{aligned}
\oint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{r} 
&= \oint_{\partial D} M \ \mathrm{d} x + N \ \mathrm{d} y \\
&= - \int_a^b \int_{f_1(x)}^{f_2(x)}\frac{\partial M}{\partial y} \ \mathrm{d} y \ \mathrm{d} x + \int_a^b \int_{f_1(x)}^{f_2(x)}\frac{\partial N}{\partial x} \ \mathrm{d} y \ \mathrm{d} x \\
&= \iint_D \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} A
\end{aligned}
$$


Now suppose that $D$ does not satisfy the special case, but can be splitted into finitely many of such regions $D_1,D_2,\cdots,D_n$. Then,

$$
\begin{aligned}
\oint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{r} 
&= \sum_{i=1}^n \oint_{\partial D_i} \vec{F} \cdot \mathrm{d} \vec{r}  \\
&= \sum_{i=1}^n \iint_{D_i} \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} A \\
&= \iint_D \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \ \mathrm{d} A
\end{aligned}
$$

Not all regions can be splitted into finitely many special regions. If that is the case, we claim that we can produce a sequence of regions $D_1,D_2,\cdots,D_n,\cdots$ such that

$$ \lim_{n\rightarrow\infty} \bigcup_{i=1}^n D_i = D$$

and such that each $D_n$ can be splitted into finitely number of regions of the special case. Then, we can use the methods above to prove that the theorem is true for this type of region.



# A Corollary of Green Theorem

This corollary is described as the "Flux-Divergence or Normal Form" in the Hass textbook. It states that

$$ \oint_{\partial D} \vec{F} \cdot \vec{n} \ \mathrm{d} s = \iint_D \left(\frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} \right) \ \mathrm{d} A.$$

This can be proved by either deriving formulas, or use that fact that $\vec{F} \cdot \vec{n} \ \mathrm{d} s = M \ \mathrm{d} y - N \ \mathrm{d} x$ and apply Green's Theorem. We're not gonna expand on this because we have more interesting below.





## Chapter 2: Surface Integral and Stoke's Theorem

Let $S$ be a surface and $G$ be a 3-dimensional function. The surface integral

$$ \iint_S G \ \mathrm{d}\sigma$$

means the infinite sum of the function value over the sueface. If $S$ is parameterized by $\vec{r}(u,v) = \left< f(u,v),g(u,v),h(u,v) \right>$ where $(u,v)\in R$, then

$$ \iint_S G \ \mathrm{d}\sigma = \iint_R G(f(u,v),g(u,v),h(u,v)) \left| \frac{\partial \vec{r}}{\partial u} \times \frac{\partial \vec{r}}{\partial v} \right| \ \mathrm{d}u \ \mathrm{d} v $$

Similar to Green's Theorem that turns a line integral into a double integral, Stoke's Theorem can turn a line integral into a surface integral. Let $S$ be a surface bounded by $\partial S$, and $\vec{F}$ be a vector field. Then,

$$ \oint_{\partial S} \vec{F} \cdot \mathrm{d} \vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n} \ \mathrm{d} \sigma.$$


# Proof 1

Hass's textbook provides a proof of Stoke's Theorem on polyhedral surface by using a modified Green's Theorem. Assume surface $S$ consists of plane surface $S_1,\cdots,S_n$. Then for each $S_i$, a plane surface in $\mathbb{R}^3$ as stated, 

$$ \oint_{\partial S_i} \vec{F} \cdot \mathrm{d} \vec{r} = \iint_{S_i}  (\nabla \times \vec{F}) \cdot \vec{n} \ \mathrm{d} \sigma,$$

where $\vec{n}$ is a normal vector of the plane surface. This is because in the plane, 

$$ \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} = (\nabla\times\vec{F}) \cdot \hat{k},$$

and $\hat{k}$ is the normal vector of the 2-dimensional plane in $\mathbb{R}^3$. The modified theorem can be proved by modifying the coordinate axis to match the plane.

Add up the modified Green's Theorem on each surface $S_i$, we get the Stoke's Theorem.



# Proof 2

Another proof is to consider a special case where $\vec{F} = M(x,y,z) \hat{\imath}$ and the surface can be modeled as $z = f(x,y)$ with the domain

$$ D=\left\{ \left. (x,y) \mid \gamma(x) \leq y\leq \delta(x),a\leq x\leq b  \right. \right\} $$

and rigorously derive everything. Then, for regions that can't be simply modeled as a 2-variable function, split into multiple small regions that do. Next, prove that the theorem also works for $\vec{F} = N(x,y,z) \hat{\jmath}$ and $\vec{F} = P(x,y,z) \hat{k}$, and finally, sum them all together to get the whole proof.



## Chapter 3: Divergence Theorem (or Gauss's Theorem)

With the previous two theorems that cope with line integrals, we can come up with the Divergence Theorem that cope with closed surface integral. Because I couldn't type the symbol `\oiint`, I will use $\iint$ for closed surface integral in this blog. For a better reading experience, I will make a $\LaTeX$ version of this article soon.

The Divergence Theorem states that, let $D$ be a region in $\mathbb{R}^3$, and $\partial D$ be the closed surface that bounds the region $D$. Let $F$ be a 3-dimensional vector field, then

$$ 
\iint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{A}
=\iint_{\partial D} \vec{F} \cdot \vec{n} \ \mathrm{d} s
= \iiint_D \nabla \cdot \vec{F} \ \mathrm{d} V
$$

# Proof of Divergence Theorem

We first prove a special case, where $\vec{F} = P(x,y,z) \hat{k}$. Let $\partial D = S_1 \cup S_2 \cup S_3$, where $S_1$ is the bottom surface $z = \phi(x,y)$, $S_2$ is the top surface $z = \psi(x,y)$, and $S_3$ is a cylinder, all over the region $R$.

$$ 
\iint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{A} 
= \iint_{S_1} \vec{F} \cdot \mathrm{d} \vec{A} + \iint_{S_2} \vec{F} \cdot \mathrm{d} \vec{A} + \iint_{S_3} \vec{F} \cdot \mathrm{d} \vec{A}.
$$

Starting with $\iint_{S_1} \vec{F} \cdot \mathrm{d} \vec{A}$, we have

$$
\begin{aligned}
\iint_{S_1} \vec{F} \cdot \mathrm{d} \vec{A}
&= \iint_R P(x,y,\phi(x,y)) \hat{k} \cdot \left( \frac{\partial \phi}{\partial x} \hat{\imath} + \frac{\partial \phi}{\partial y} \hat{\jmath} - \hat{k} \right) \ \mathrm{d} x \ \mathrm{d} y \\
&= - \iint_R P(x,y,\phi(x,y)) \ \mathrm{d} x \ \mathrm{d} y
\end{aligned}
$$

Similarly,

$$
\begin{aligned}
\iint_{S_2} \vec{F} \cdot \mathrm{d} \vec{A}
&= \iint_R P(x,y,\psi(x,y)) \hat{k} \cdot \left( - \frac{\partial \psi}{\partial x} \hat{\imath} - \frac{\partial \psi}{\partial y} \hat{\jmath} + \hat{k} \right) \ \mathrm{d} x \ \mathrm{d} y \\
&= \iint_R P(x,y,\psi(x,y)) \ \mathrm{d} x \ \mathrm{d} y
\end{aligned}
$$

For the integration on $S_3$, we have

$$ \iint_{S_3} \vec{F} \cdot \mathrm{d} \vec{A} = 0 $$

because $\vec{F} \cdot \vec{n} = 0$. Therefore,

$$
\begin{aligned}
\iint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{A} 
&= \iint_R P(x,y,\psi(x,y)) - P(x,y,\phi(x,y)) \ \mathrm{d} x \ \mathrm{d} y \\
&= \iint_R \int_{\phi(x,y)}^{\psi(x,y)} \frac{\partial P}{\partial z} \ \mathrm{d} z \ \mathrm{d} x \ \mathrm{d} y \\
\end{aligned}
$$

The divergence vector of $\vec{F}$ is $\nabla \cdot \vec{F} = \frac{\partial P}{\partial z}$. Therefore,

$$ \iiint_D \nabla \cdot \vec{F} \ \mathrm{d} V = \iint_R \int_{\phi(x,y)}^{\psi(x,y)} \frac{\partial P}{\partial z} \ \mathrm{d} z \ \mathrm{d} x \ \mathrm{d} y,$$

so Divergence Theorem holds when $\vec{F} = P(x,y,z) \hat{k}$. Similarly, it holds when $\vec{F} = M(x,y,z) \hat{\imath}$ or $\vec{F} = N(x,y,z) \hat{\jmath}$. Combine them all together, when $\vec{F} = M(x,y,z) \hat{\imath} + N(x,y,z) \hat{\jmath} + P(x,y,z) \hat{k}$, let $\vec{F_1} = M(x,y,z) \hat{\imath}$, $\vec{F_2} = N(x,y,z) \hat{\jmath}$ and $\vec{F_3} = P(x,y,z) \hat{k}$. Then,

$$
\begin{aligned}
\iint_{\partial D} \vec{F} \cdot \mathrm{d} \vec{A} 
&= \iint_{\partial D} \vec{F_1} \cdot \mathrm{d} \vec{A} + \iint_{\partial D} \vec{F_2} \cdot \mathrm{d} \vec{A} \iint_{\partial D} \vec{F_3} \cdot \mathrm{d} \vec{A} \\
&= \iiint_D \nabla \cdot \vec{F_1} \ \mathrm{d} V + \iiint_D \nabla \cdot \vec{F_2} \ \mathrm{d} V + \iiint_D \nabla \cdot \vec{F_3} \ \mathrm{d} V \\
&= \iiint_D \nabla \cdot \vec{F} \ \mathrm{d} V.
\end{aligned} 
$$

Therefore, Divergence Theorem holds for a general vector field.

## Chapter 4: Physics Concepts

If there is a charge $q_1$ and a charge $q_2$ apart with distance $r$, then Coulomb's Law suggests that the force $q_1$ exerted on $q_2$ is 

$$ \vec{F} = \frac{k_e q_1 q_2}{r^2} \hat{r_2} = \frac{q_1 q_2}{4\pi\epsilon_0 r^2} \hat{r_2},$$

where $\hat{r_2}$ is a unit vector opposite from the direction from $q_2$ to $q_1$, and $k_e = \frac{1}{4\pi\epsilon_0}$ is the Coulomb's constant.

We define the electric field $\vec{E}$ on a point be the net force a test charge of $+1$ will experience. If there is a charge $q$ with distance $r$ away from the point, then the electric field of the point is

$$ \vec{E} = \frac{k_e q}{r^2} \hat{r},$$

where $\hat{r}$ is a unit vector with the direction from the charge to the point. Electric field of every points in space forms a vector field, and the surface integral of the electric field over a surface is called the **electric flux** of the surface. Formally, let $S$ be a surface, the electric flux of $S$ is

$$ \Phi_E = \iint_S \vec{E} \cdot \mathrm{d} \vec{A}.$$

## Chapter 5: Putting Everything Together -- Gauss's Law and its Proof

If there is a charge $q$ in the origin in a 3D space. Let $S$ be a closed surface containing the origin, then Gauss's Law states that the electric flux of $S$ is $\frac{q}{\epsilon_0}$ regardless of the shape of $S$.

**_Lemma 1: If $S$ is a sphere centered at the origin, then Gauss's Law is true._**

**_Proof:_** In this case, $\vec{F}$ and $\mathrm{d} \vec{A}$ are parallel. so

$$ \Phi_E = \iint_S \vec{E} \cdot \mathrm{d} \vec{A} = \iint_S E \ \mathrm{d} A = E \iint_S \ \mathrm{d} A = \frac{q}{4\pi\epsilon_0 r^2} \left( 4\pi r^2 \right) = \frac{q}{\epsilon_0}.$$

<div style="text-align: right"><b> Q.E.D. </b></div>

**_Lemma 2: For each point not in the origin, $\nabla \cdot \vec{E} = 0$._**

**_Proof:_** Let $\rho = \sqrt{x^2 + y^2 + z^2}$. Since the point is not the origin, $\rho \neq 0$. Then

$$ \vec{E} = \frac{q}{4\pi\epsilon_0 \rho^2} \left( \frac{x\hat{\imath} + y\hat{\jmath} + z\hat{k}}{\rho} \right) 
= \frac{q}{4\pi\epsilon_0 \rho^3} \left(x\hat{\imath} + y\hat{\jmath} + z\hat{k}\right) $$

Let $\vec{E} = M\hat{\imath} + N\hat{\jmath} + P\hat{k}$, then

$$ M = \frac{q}{4\pi\epsilon_0 \rho^3} x $$

Take the partial derivative, we get

$$ \frac{\partial M}{\partial x} = \frac{q}{4\pi\epsilon_0} \left( -3x^2 \rho^{-5} + \rho^{-3} \right).$$

Similarly,

$$ \frac{\partial N}{\partial y} = \frac{q}{4\pi\epsilon_0} \left( -3y^2 \rho^{-5} + \rho^{-3} \right), 
\quad \frac{\partial P}{\partial z} = \frac{q}{4\pi\epsilon_0} \left( -3z^2 \rho^{-5} + \rho^{-3} \right).$$

Therefore,

$$
\begin{aligned}
\nabla \cdot \vec{E} 
&= \frac{q}{4\pi\epsilon_0} \left( -3x^2\rho^{-5} - 3y^2\rho^{-5} - 3z^2\rho^{-5} + 3\rho^{-3} \right) \\
&= \frac{q}{4\pi\epsilon_0} \left( -3 \rho^2\rho^{-5} + 3\rho^{-3} \right) \\
&= 0
\end{aligned}
$$

<div style="text-align: right"><b> Q.E.D. </b></div>

With the two lemmas above, we can prove the whole theorem. Let $D$ be the region bounded by $S$, and $D_0 \in D$ be a sphere centered at the origin bounded by $S_0$.  By Lemma 1, $(\Phi_E)_{S_0} = \frac{q}{\epsilon_0}$.

Let $D_1 = D - D_0$ bounded by $S_1$. Then $D_1$ only contains points that are not the origin because the origin is in $D_0$. By Divergence Theorem,

$$ (\Phi_E)_{S_1} = \iint_{S_1} \vec{E} \cdot \mathrm{d} \vec{A} = \iiint_{D_1} \nabla \cdot \vec{E} \ \mathrm{d} V. $$

Since $\nabla \cdot \vec{E} = 0$ by Lemma 2, we have

$$ \iiint_{D_1} \nabla \cdot \vec{E} \ \mathrm{d} V = \iiint_{D_1} 0 \ \mathrm{d} V = 0,$$

so $(\Phi_E)_{S_1} = 0$. Therefore,

$$
\begin{aligned}
\Phi_E &= \iint_S \vec{E} \cdot \mathrm{d} \vec{A} \\
&= \iiint_D \nabla \cdot \vec{E} \cdot \mathrm{d} V \\
&= \iiint_{D_0} \nabla \cdot \vec{E} \cdot \mathrm{d} V + \iiint_{D_1} \nabla \cdot \vec{E} \cdot \mathrm{d} V \\
&= (\Phi_E)_{S_0} + (\Phi_E)_{S_1} \\
&= \frac{q}{\epsilon_0} + 0 \\
&= \frac{q}{\epsilon_0}
\end{aligned} 
$$

and that's it! We've just proved an amazing theorem that the electric flux on a closed surface due to a point charge is unrelated to the shape of the surface. Gauss's Law is beautiful because it's simple but unintuitive.