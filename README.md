# Engineer for Change: JavaScript Analysis

What do I mean by “change”?

Business rules change, customers expectations change, requirements change, maintainers change, technologies change … write your applications with this at the center of your mind.’

To do that, we need a list of philosophies and approaches to higher level programmatic thinking to lend itself to better long-term code quality. You will find all these ideas in standard computer science theory or popular technical books written by prolific leaders in our industry.

## Nulla. (Two non-code rules before we start) Have empathy

### A. Write code for the maintainers, not for the computers

Computers can understand and execute the ugliest (most obfuscated) of code as long as it’s syntactically correct. This does not apply to humans. Because of this, the largest reason for standards in code authoring is for the human that will eventually own the code you write.

### B. Writing code is NOT an expression of individuality

Code is community owned, represents PayPal and is explicitly for the customer. This means that all code should look like a single person wrote it* with the express intent of the customer.

Conformity has a much higher value then uniqueness when it comes to the scale of PayPal and the reach of its products.

* Don’t take this to the logical extreme.

## I. Avoid classical OO thinking

For many, classical, object-oriented patterns are the de facto standard for managing complexity. The problem is not necessarily the pure, idealistic notion of OO, but how it evolves with software’s growth and change.

Rarely do we get data that is shaped the way OO works most effectively. What’s more, the web and it’s native technologies don’t lend well to classical thinking. So, why do we fallback to it when we’ve seen with our own eyes where it leads?

### A. Avoid “instance” thinking

One of the big intentions with the OO approach is how we link data with behavior. In JS, we traditionally want instances of unique data, with references to shared behavior, and this is done with “class” like patterns.

To ensure everything refers to the right “instance”, we then tie everything together with the `this` keyword. We are now able to keep unique data on the object, and shared methods on the prototype. Good, right? Well …

Unfortunately, this intrinsically links nouns (data) with verbs (behavior) in a strict hierarchical taxonomy. Most times we do a monkey, human example. They can both do the same behavior, say, grab a banana, but they may have different physical traits, like having a tail or a name.

So, we create a Primate superclass and then have a monkey and human class. So far, so good, but what do we do when our product owner wants a robot named Jonny Five to be able to grab bananas? A robot is 100% *not* a Primate … hmmm …

### B. Everything becomes the interface

Classical OO thinking results in the hanging a lot of “private” behavior on the prototype. This exposes your implementation details, and we think to ourselves, “I’ll just prefix it with an underscore.”

Rather, think about the quote from “Gang of Five”: “Program to an interface, not an implementation.” So, build with encapsulation, true privates and explicitly return a public API … think interface design.

###  C. Fragile vertical inheritance

Vertical inheritance creates dependency chains that are fragile to change. Nothing is worse than having to climb up the inheritance chain to find a bug at the base class. The fear that having a downstream components rely on buggy functionality is antagonistic to successful evolution.

### D. Implicit state becomes utilized

Object-oriented approaches to software engineering is so ubiquitous, that we think of it as the de facto solution for All The Things (™). Self-reference is a large part of OO design, but the problem is that anytime you reference `this`, you are referencing implicit, mutable state.

This has been lovingly referred to as the "Gorilla and banana problem:”

“The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.”

– Joe Armstrong

The solve for this is limit what a function should need to be able to produce an output. Pure functional programming is rarely possible or reasonable, but get as close as you can. Try to reduce as many side-effects within your functions as possible. Pass in everything it needs as parameters.

### E. APIs become constructor functions (classes)

Returning constructor functions reduces the flexibility and compose’ability of your program. Always return pure JS objects with an explicit, understandable API.


## II. Reduce ambiguity, potential confusion

Because we now know that we *should* be writing code for the future maintainers, here are a few things that should be avoided to reduce the confusion and frustration for the ones inheriting our code.

### A. Avoid imperative code

Remember fat, client-side apps built from jQuery? That’s the extreme, obvious example of imperative coding. Unfortunately, jQuery is only one of many examples.

Declarative programming is an order of magnitudes easier to understand and maintain. Write what you want something to do on the thing that does it.

### B. Minimize decentralized, event driven programming

Event driven programming is convenient and powerful, but often times it results in a web of interdependent events being fired and listen to all over multiple files. Not only is this hard to build a mental model of, but debugging such programs can be extremely hard.

### C. Avoid “clever” or tricky code and stay consistent with patterns and style

This should go without saying, but knowing that you won’t be the one maintaining the code, avoid clever hacks or tricky code because it allows for 30,000,000 operations per second rather than 15,000,000. Yes, it’s twice as fast (and beyond human perception), but it’s three times harder to understand.

As for style, pick something and adhere to it. It doesn’t matter if it’s spaces or tabs, Object.create or object factories, just be consistent.

* Use safeGet as an example.


## III. Venture outside of MVC

Ask audience: how many here believe they have successfully implemented a web application (the mature version) in the pure form of MVC?

Okay, then why don’t we admit that MVC doesn’t work well in the web environment? Time and time again we *think* we can get MVC to work if we just try harder or be more disciplined, but it fails. Stop the madness!

### A. Leverage utilities

Too often, I see a ton of tangential logic bound to views and models creating bloated and difficult to understand components. This also has the side-effect of coupling a lot of this logic to your view or model technology.

Utilities should be small focused assistive logic to your main application and should be written as decoupled as possible from any tech that’s used. Pure JS utilities are recommended, or at the very least, utilities that have no outside dependencies.

### B. Avoid large frameworks

To shamefully quote myself, “Large, opinionated frameworks solve the ‘first 6 months’ problems, while, at the same time, creating the ‘I can’t evolve’ problems.”

* Use the ideas from the prior presentation.

### C. Decouple as much as possible

Any approach you take to solving architectural problems, purposefully find solutions that are self-contained. For example:

Say you are using React.js for your views. Good choice! It is a focused, self-contained solutions for views. Now, let’s say you need a new routing solution. How about React-Router? Ouch, be careful, your router is now tightly coupled with your view solutions!

### D. Think in functional groupings, not MVC

The web is a pretty interesting environment for engineering applications. It’s not a coincidence that the following exist:

- MVC
- MVVM
- MVP
- … ahhh, *&^$! I give up …
- MV*

With that said, the idea that conforming to some three letter acronym is observably messy and confusing. So, let’s stop trying.

Rather, think of functional groups that are native to the web, rather than native to Smalltalk applications. Here’s an example of a proposed architecture for Consumer Web Wallet:

- Router
- Initiator
- Requestor
- Service
- Modeler
- Store
- View
- Utilities

Should we call this the RIRSMSVU? No, because this is most likely unique to our application. This means you have to deeply think about the functional groups in *your* application context.