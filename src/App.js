const Pet = () => React.createElement("div", {}, 
    [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havana")
    ]
);

const App = () => React.createElement("div", {}, [
    React.createElement("h1", { id: 'x' }, "Adopt me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
]);

ReactDOM.render( React.createElement(App), document.getElementById("root"));
