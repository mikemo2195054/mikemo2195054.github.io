---
layout: post
title:  "Interesting Thing Found on my Sister's Math Textbook"
categories: life
---

{% include mathjax.html %}

My sister is in 2nd grade. When I was helping her with her math homework, I found many outrageous things in the textbook. First let's look at some pages in the textbook.

Page 6
![](/pics/my-sister-textbook/page-6.jpeg)

Page 7
![](/pics/my-sister-textbook/page-7.jpeg)

Page 9
![](/pics/my-sister-textbook/page-9.jpeg)

Page 28
![](/pics/my-sister-textbook/page-28.jpeg)

Page 29
![](/pics/my-sister-textbook/page-29.jpeg)

Page 31
![](/pics/my-sister-textbook/page-31.jpeg)

Page 46
![](/pics/my-sister-textbook/page-46.jpeg)

Page 127
![](/pics/my-sister-textbook/page-127.jpeg)

Page 133
![](/pics/my-sister-textbook/page-133.jpeg)

Among these pages, here are some crazy things that I think weaken students' understanding.

# A bunch of irrelated examples

In page 6 and 7, there are three example problems on three different topics: associativity law and make tens, use ruler to measure things, and count by ones, tens and hundreds. No high-quality textbooks put completely irrelated topics on one chapter. You can hardly say that there are any connections between the three topics, and even if you can, it is impossible for 2nd graders to find the connections. Same thing in page 28 and 29, where page 28 talks about 2-digit addition, and page 29 suddenly skips to fractions.

# Inappropriate order of difficulty

Page 6 talks about associativity law. I'm pretty sure this page should be the first time students see associativity law. However, instead of starting with simple examples such as $(1 + 2) + 3 = 1 + (2 + 3)$, this page straight up shows $14 + 31 + 9 + 42 = 14 + (31 + 9) + 42$. While some smart students will know how to do it, no one will understand the "why" behinds it. 

A good introduction to associativity law to 2nd graders should be like this: teacher splits students into two groups to work on $1 + 2 + 3$. One group calculate $1 + 2$ first and then add 3, the other group calculate $2 + 3$ first and then add 1. After both groups get the answer, the teacher let them compare the ansewr, and they are surprised that their answers are the same. I'm sure that associativity law will appear again in middle school, so the same way works for middle school students as well, and students who wasn't able to participate in this activity in elementary school do to ability or attention span can do this in middle school again. 

While page 6 is so overwhelming for students, page 31 and 46 went back to talk about addition of 2 numbers. The order of these pages should definitely be switched. **More surprisingly**, page 133 talks about the application of consecutive operation on numbers. It's a problem about $19 - 7 + 5 = 17$, but it doesn't even write in this way. It is written in $19 - 7 = 12$, $12 + 5 = 17$. From this page, we can conclude that students do not understand the meaning of consecutive operations such as $1 + 2 + 3$ even they finish the book. But, let's look at page 6 again: **this is at the beginning of the book**, and there is already $14 + 31 + 9 + 42$. The result is that students completely don't know what it means when solving problems like that in page 6.

# Arithmetic methods that is hard to understand for students

Page 28 shows a method to do 2-digit addition:

$$ 38 + 29 = 38 + (2 + 27) = (38 + 2) + 27 = 40 + 27 = 67. $$ 

The book didn't directly show the formula. Instead, it shows a diagram, but it means the same thing. Let alone that students haven't understand associativity law due to the poor explanation in page 6, this method actually has a lot of steps in it, and many of them even involves algebra. The following is a breakdown of this method.

1. The nearest multiple of 10 (or, as the textbook called, "benchmark number") to 38 is 40.
2. Solve for $x$: $38 + x = 40$. The solution is $x = 2$. (the textbook describe this as "38 is 2 away from 40")
3. Solve for $x$: $29 = 2 + x$. The solution is $x = 27$, so $29 = 2 + 27$.
4. Substitute $29 = 2 + 27$ into the original equation: $38 + 29 = 38 + (2 + 27)$.
5. By associativity law, $38 + (2 + 27) = (38 + 2) + 27$.
6. Calculate, $38 + 2 = 40$, so $(38 + 2) + 27 = 40 + 27$.
7. Final calculation: $40 + 27 = 67$.

This one simple method is actually 7 steps for students to solve a 2-digit addition. That's what this method look like to 2nd graders who haven't learned anything beyond. It is comfirmation bias that makes us think this is an easy way, but it's actually not to students. While there isn't any explicit mention of algebra in the textbook, simialr thought process is still needed for students to complete the corresponding steps. For example, in step 2, while students don't know that they are solving the equation $38 + x = 40$ when figuring out how much 38 is away from 40, students still need to go through the same thought process to find a number that works for this equation. Before students understand clearly about the relationship between addition and subtraction, this step always looks like algebra to them. I haven't look at the textbooks before this one, but unless students have done a lot of problems like $47 + \underline{\hspace{1cm}} = 50$ and $29 + \underline{\hspace{1cm}} = 30$ in any form, this step will look very difficult for them. What's even worse is that there are two such steps, and students need to do both algebra steps in their head before writing the first thing (in the textbook, it is splitting 29 to 2 and 27 and express it using branches).

Page 46, on the other hand, shows a much more intuitive method of using circles representing tens and ones to do 2-digit addition. This should at least be the first way to show students how to do 2-digit addition. Then, after students have done enough preparation and are ready for the method on page 28, the textbook can show this method to enhance students' ability of solving one problem using multiple ways.