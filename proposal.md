## Summary (tl;dr):

In [the first part of this "coding for change" theme](https://github.paypal.com/JSConference/cfp/issues/29), I focused on a front-end, modular-centric approach to building scalable UIs that are architected in a way that allows flexibility and evolution. This talk will focus solely on JavaScript (server & client) at the macro level, architecture/engineering practices, and suggest ways to evaluate JS code beyond just syntax, performance and style critiques.

## Defining the problems:

1. **Tech fragility/debt/lock-in:** Too many times, software development ends up being a snapshot of business req's, popular tech or style for that particular point in time. When code is heavily coupled with this, technical debt mounts, fragility increases and tech lock-in prevents quick resolution.
2. **Incomplete code reviews:** Code reviews often focus on syntax, performance, style or other micro level critiques. While this does carry some value, what's frequently missed is the most important aspect to a code review: how resilient is this code to change.
3. **Difficult code adoption:** Since the large majority of engineers are working on code they did not originally author, writing code in a way that increases ease of adoption, understanding and resiliency is paramount to an organization's success.

## Proposed solution:

Define a set of criteria that allow engineers to leverage when evaluating JavaScript. The micro level, e.g. syntax or style, can easily be handled with powerful tools like linters, and type checkers, but we humans are the only ones that can evaluate code at the macro level: code patterns, API design, architectural decisions. 

***Unfortunately, the macro level has far more consequences long term than syntax or style, so this is critical to a company's success and agility.***

This criteria will be based off of sound programming principles that are (mostly) language agnostic and applicable in many, if not all, development contexts. This talk will review each principle and provide examples of its application in JavaScript.
