const heading = React.createElement("h1",{},"Hello from react..!");
console.log(heading);

const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading1",key:"heading1"},"This is heading1"),React.createElement("h2",{id:"heading2",key:"heading2"},"This is heading2")]
));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)