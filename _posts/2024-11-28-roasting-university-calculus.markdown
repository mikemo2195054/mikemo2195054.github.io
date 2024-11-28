---
layout: post
title:  "Roasting University Calculus by Hass, Heil, and a Bunch of Authers"
categories: life
---

{% include mathjax.html %}

Happy Thanksgiving!

As mentinoed in previous posts, I'm taking Multivariable Calculus in college this semester. The course use the textbook University Calculus as the title said. I'm bored because I haven't been fully recovered from the sickness. I wanted to do something, but was not energetic enough for programming competition problems, so I decided to open a random page in the textbook. I opened Chapter 14.8: Substitutions in Multiple Integrals, read the first page and it was basically like this:


> Assume $x = g(u,v)$, $y = h(u,v)$, remember what we did in single-variable calculus that looks like something like this: 
> 
> $$ \int_{g(a)}^{g(b)} f(x) \, \mathrm{d}x = \int_a^b f(g(u)) g'(u) \, \mathrm{d}u? $$
> 
> Let's now define an interesting thing called Jacobian determinant $J$ such that $\mathrm{d}x \, \mathrm{d}y = J \, \mathrm{d}u \, \mathrm{d}v$. Since four partial derivatives are associated with the transforming equations, it is also "reasonable" to assume that the factor $J$ we seek includes them all. We do a bunch of yapping and imagination and the Jacobian determinant is magically defined as follows:
>
> $$ J = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}.$$
> 
> A bunch of sentences just repeating what was said over and over again, and we got the theorem
>
> $$ \iint_R f(x,y) \, \mathrm{d} x \, \mathrm{d} y = \iint_G f(g(u,v),h(u,v)) \cdot J \, \mathrm{d} u \, \mathrm{d}v. $$
> 
> Example 1, 2, 3, 4, and generalization into triple integrals.


It this is totally confusing to read this, because it talks about what do to but never talks about why it's like that.

The main problem here is to transform $\mathrm{d} x \, \mathrm{d} y$ into $\mathrm{d} u \, \mathrm{d} v$, meaning that we need to find the relationship between the $\Delta A$ rectangle in the $xy$-plane and the $\Delta A$ shape in the $uv$-plane.

[This video](https://www.youtube.com/watch?v=UZb9hZIAvL4&list=PL4C4C8A7D06566F38&index=18) from MIT OpenCourseWare did a great job explaining this. We first consider a case where $u$ and $v$ are linear functions of $x$ and $y$, say 

$$ u = 3x - y, \ v = x + 2y. $$ 

Consider a square built from vector $\left<0,1\right>$ and $\left<1,0\right>$ in the $xy$-plane, the area of this square is 1. When transferring this square to the $uv$-plane, $\left<0,1\right>$ got transferred to $\left<3\times 0 - 1,0 + 2\times 1\right> = \left< -1,2 \right>$, and $\left<1,0\right>$ got transferred to $\left<3\times 1 - 0,1 + 2\times 0\right> = \left< 3,1 \right>$. The area of the transferred shape, that is a parallelogram, is

$$ \begin{vmatrix} -1 & 2 \\ 3 & 1 \end{vmatrix} = -6.$$

Since every square from the $xy$-plane is transferred to the shapes with the same area in the $uv$-plane, the calculated result means that $\mathrm{d} u \, \mathrm{d} v = 6 \, \mathrm{d} x \, \mathrm{d} y$.

Consider a more general case of a rectangle at point $(x_0,y_0)$ with vector $\left< \Delta x, 0 \right>$ and width $\left< 0,\Delta y \right>$. By linear approximation, we can see that the vectors are transferred as follows:

$$ \left< \Delta x, 0 \right> \rightsquigarrow \left< \frac{\partial u}{\partial x} \Delta x ,\frac{\partial v}{\partial x} \Delta x  \right>, \ 
\left< 0, \Delta y \right> \rightsquigarrow \left< \frac{\partial u}{\partial y} \Delta y ,\frac{\partial v}{\partial y} \Delta y  \right>.$$

By calculating the determinant, we can see that the ratio of the new parallelogram and the original rectangle is exactly the Jacobian rectangle.

The connection between Jacobian determinant and linear approximation was not mentioned at all in the textbook.