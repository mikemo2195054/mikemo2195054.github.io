---
layout: post
title:  "A Bunch of DP Problems"
date:   2024-11-11 14:40:00 -0500
categories: jekyll update
---

{% include mathjax.html %}

I completed a bunch of DP problems, and math competition experience can help with those a lot.

# [(USACO 2019 US Open Gold 1) Snakes](http://www.usaco.org/index.php?page=viewproblem2&cpid=945)

This problem asks us to minimize the sum of $s - a_i$ for each net size $s$. If a net size is used to capture group $l$ to $r$, the most optimal net size would be $\max_{l\leq x\leq r} a_x$. 

Let $f(x,y)$ represent the minimum space wasted from group 1 to $y$ with $x$ changes in net size, then

$$ f(x,y) = \min_{0\leq c < y} \left\{ f(x-1,c) + \sum_{i = c+1}^j \left( \max_{c+1\leq d\leq j} a_d - a_i \right) \right\}. $$

The initial condition is

$$ f(0,y) = \sum_{i = 1}^y \left( \max_{1\leq j\leq y} a_j - a_i \right), $$

and the answer is $f(k,n)$. The current time complexity is $O(KN^3)$, which is over the time limit. However, we notice that if we preprocess

$$ P(l,r) = \sum_{i = l}^r \left( \max_{l\leq j\leq r} a_j - a_i \right) = (r-l+1) \max_{l\leq j\leq r} a_j - \sum_{i = l}^r a_i $$

within $O(N^2)$ time, the time complexity will become $O(KN^2)$.


# [(USACO 2016 February Gold 2) Circular Barn Revisited](https://usaco.org/index.php?page=viewproblem2&cpid=622)

It is difficult to handle the circular barn, but we can make the barn linear by restricting that the first room must have its exterier door open. With this restriction, no cows will go from the $n$-th barn to the first barn because they can go through the door of the first barn and that's closer.

Let $f(i,j)$ represent the minimum total distance for every rooms if we only allow $j$ exterior doors to open from room 1 to $i$, and one of them must be room $i$. Then

$$ f(i,j) = \min_{j-1\leq c < i} \left\{ f(c,j-1) - (i-c) \sum_{\alpha = i}^n a_{\alpha} \right\}, $$

because every cows going to room $i$ to $n$ needed to go from door $c$, but not they can go from door $i$, leading a distance difference of $i-c$ for each cow. The initial condition is

$$ f(1,1) = \sum_{i=1}^n (i-1)a_i.$$

This algorithm runs with a time complexity of $O(kn)$ with a preprocess of prefix sum of $a$ for a linear barn. To consider the circular case, we run it $n$ times, with each time the first room being a different room. The total time complexity is $O(kn^2)$.


# [(USACO 2018 Feburary Gold 3) Taming the Herd](https://usaco.org/index.php?page=viewproblem2&cpid=815)

Let $f(i,j)$ be the minimum tampered log entries from $a_1$ to $a_i$ with $j$ breakouts, and the last breakout happens in day $i$, then

$$ f(i,j) = \min_{j\leq k < i} \left\{ f(k,j-1) + \sum_{\alpha = k+1}^{i-1} \left[ a_{\alpha} \neq \alpha - k \right] \right\},$$

where $[X]$ is an [Iverson Bracket](https://en.wikipedia.org/wiki/Iverson_bracket). The reason why this equation is true is because if there are $j-1$ breakouts from $a_1$ to $a_k$, and the $j$-th breakout happens on day $i$,

$$ a_{k+1} = 1,\ a_{k+2} = 2,\ \cdots,\ a_{i-1} = {i-1-k},\ a_i = 0. $$

The original time complexity is $O(N^4)$, but if we preprocess

$$ P(x,y) = \sum_{\alpha = 1}^{y} \left[ a_{\alpha} \neq \alpha - x \right],$$

the time complexity will be $O(N^3)$.



# [(USACO 2019 December Gold 3) Moortal Cowmbat](https://usaco.org/index.php?page=viewproblem2&cpid=971)

Let $f(x,y)$ be the minimum number of days for the first $x$ characters with the last characters being $y$, then

$$ f(x,y) = \min \begin{cases} f(i-1,y) + a_{s_iy} \\ \displaystyle\min_{1\leq d\leq M} \left\{ f(i-K,d) + \sum_{\alpha = i-k+1}^i a_{s_\alpha y} \right\} \end{cases} $$

with the initial value being

$$ f(h,y) = \sum_{\alpha = 1}^y a_{s_\alpha h} $$

for all $k\leq h < 2k$. The time complexity can improve from $O(NM^2K)$ to $O(NM^2)$ by preprocessing

$$ P(x,y) = \sum_{\alpha = 1}^x a_{s_\alpha y} $$