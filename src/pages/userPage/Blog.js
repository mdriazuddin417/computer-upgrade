import React from "react";

const Blog = () => {
  return (
    <div className="lg:pt-24 pt-12 px-5">
      <div className="space-y-8">
        <div className="hover:shadow-lg p-5 hover:rounded-lg duration-300">
          <p className="text-xl">
            {" "}
            How will you improve the performance of a React Application ?
          </p>
          <p className="text-gray-500">
            Ans: Keeping component state local where necessary. Memoizing React
            components to prevent unnecessary re-renders. Code - spliting in
            React using dynamic import(). windowing or list virtualization in
            React. Lazy loading images in React . The Browser often invests a
            lot of time rendering, when styles are implied inline. Scripting and
            rendering take time because the browser has to plan all the React
            style rules to the Css Properties.{" "}
          </p>
        </div>
        <div className="hover:shadow-lg p-5 hover:rounded-lg duration-300">
          <p className="text-xl">
            {" "}
            What are the different ways to manage a state in a React
            application?
          </p>
          <p className="text-gray-500">
            Ans: In modern React, we build our applications with functional
            components. Components are themselves Javascript functions.
            Independent and reusable bits of code. The Purpose of building the
            application with component is to have a modular architecture, with a
            clear separatin of concerns.{" "}
          </p>
        </div>
        <div className="hover:shadow-lg p-5 hover:rounded-lg duration-300">
          <p className="text-xl"> How does prototypical inheritance work?</p>
          <p className="text-gray-500">
            Ans: The Prototypal inheritance is a feature in Javascript used to
            add methods and properties in objects. It is a method by which an
            object can inhert the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of and object ,
            web use Object . Get Prototype of Object
          </p>
        </div>
        <div className="hover:shadow-lg p-5 hover:rounded-lg duration-300">
          <p className="text-xl">
            {" "}
            What is a unit test? Why should write unit tests?
          </p>
          <p className="text-gray-500">
            Ans: Unit tests are typically automated tests written adn run by
            software developers to ensure that section of and applications
            (known as the 'unit') meets its design and behaves as intended. In
            procedural programming, a unit could be an entire module, but it is
            more commonly an individual function or procedure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
