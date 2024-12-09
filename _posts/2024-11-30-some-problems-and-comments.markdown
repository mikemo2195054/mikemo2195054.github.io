---
layout: post
title:  "Some Problems on my Math Textbook and My Personal Comment"
categories: math
---

{% include mathjax.html %}

As described in the last blog, UNH's Multivariable Calculus uses a textbook by Hass, Heil and a bunch of authors. Today, I tried some problems in it. Here is a list of them, the solution, and my personal comments about their quality.

# Problem List

1. Evaluate the integral $\displaystyle \int_0^\infty  \frac{e^{-ax} - e^{-bx}}{x} \, \mathrm{d} x$ (Hint: Use the relation $\displaystyle \frac{e^{-ax} - e^{-bx}}{x} = \int_a^b e^{-xy} \, \mathrm{d} y$) to form a double integral and change the order of operation.

2. The gamma function is defined as $\displaystyle \Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, \mathrm{d} t$. It can be seen that $\displaystyle \Gamma\left(\frac12\right) = \int_0^\infty \frac{e^{-t}}{\sqrt{t}} \, \mathrm{d} t$. Let $\displaystyle I = \int_0^\infty e^{-y^2} \, \mathrm{d} y$. Show that $\Gamma\left(\frac12\right) = 2I = \sqrt{\pi}$.

3. From what we learned about double and triple integral, it can be generalized that $\displaystyle \iiiint_Q \, \mathrm{d} V$ is the "hyper-volume" of $Q$. Find the hyper-volume inside the four-dimensional space $x^2 + y^2 + z^2 + w^2 = 1$.

# Solution to Problem 1

Do what the hint is doing:

$$ \displaystyle \int_0^\infty  \frac{e^{-ax} - e^{-bx}}{x} \mathrm{d} x 
= \displaystyle \int_0^\infty  \int_a^b e^{-xy} \, \mathrm{d} y \, \mathrm{d} x 
= \displaystyle \int_a^b \int_0^\infty e^{-xy} \, \mathrm{d} x \, \mathrm{d} y.
$$

After that, I thought I have to transform them to polar coordinate, and I was stuck, until I discovered that the inner integral is just a $u$-substitution:

$$ \int_a^b \int_0^\infty e^{-xy} = \left. -\frac{1}{y} e^{-xy} \right|_0^\infty = \frac{1}{y}.$$

Then completing the outer integral, we can get that the answer is $\ln b - \ln a$.


# Solution to Problem 2

I didn't realize that I can use $u$-substitution until I saw that in the problem. Let $u = \sqrt{t}$, then

$$ \frac{\mathrm{d} u}{\mathrm{d} t} = \frac12 t^{-\frac12} = \frac{1}{2\sqrt{t}} = \frac{1}{2u} \implies \mathrm{d} t = 2u \, \mathrm{d} u.$$

Therefore,

$$ \int_0^\infty \frac{e^{-t}}{\sqrt{t}} \mathrm{d} t
= \int_0^\infty \left(\frac{e^{-u^2}}{u}\right) 2u \, \mathrm{d} u 
= \int_0^\infty 2 e^{-u^2} \, \mathrm{d} u 
= 2I.
$$

The fact that $I = \frac{\sqrt{\pi}}{2}$ is a classical example discussed in the lectures, so $2I = \sqrt{\pi}$.


# Solution to Problem 3

This one is pretty easy if you do a lot of similar problems in 2D or 3D. Just find the domain of variables one by one, we can get that

$$ \iiiint_Q \, \mathrm{d} V = \int_{-1}^1 \int_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}} \int_{-\sqrt{1-x^2-y^2}}^{\sqrt{1-x^2-y^2}} \int_{-\sqrt{1-x^2-y^2-z^2}}^{\sqrt{1-x^2-y^2-z^2}}
\, \mathrm{d}  w \, \mathrm{d} z \, \mathrm{d} y \, \mathrm{d} x. $$

Whatever the value of this quadruple integral is the answer.

# Comments

The problems involves much less deep thinking than I thought, so I think they are pretty easy. For quality, I will give them a 6 out of 10. The problems require using methods learned in class in interesting ways. My favorite is the $u$-substitution in problem 2. However, the problems didn't really combine the geometric and algebraic meaning of integrals, which is the reason why they didn't leave me with a very deep impression, but overall they are pretty good.