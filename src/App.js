const Pet = ({name, breed, animal}) => React.createElement("div", {}, 
    [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]
);

const App = () => React.createElement("div", {}, [
    React.createElement("h1", { id: 'x' }, "Adopt me!"),
    React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanese' }),
    React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cockatiel' }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
]);

ReactDOM.render( React.createElement(App), document.getElementById("root"));
