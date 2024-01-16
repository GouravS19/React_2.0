// to create tags in react we use this: 
const h1=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React")   //this makes:
//<h1 id="heading" xyz="abc">Hello World from React</h1>
// it is like: React.createElement(tag name, attributes, children)

//we use react. because it is part of core react we made tags in core react

const root=ReactDOM.createRoot(document.querySelector("#root"))
//to render everything in react we have to made a root first. so for that we made a root for that.
//it assign root in the project
//we use ReactDOM beacsue it is the part of dom or you can say it is the part of browser so for that we use reactDOM

//after making the root if we want to render that then we use .render() method like this:

// root.render(h1)

//this render method takes object or reactElements which are not tags yet,then .render method make it as a tag from the object and show it to the dom(or browser) (you can say it render them into the browser)


console.log(h1)  //it is an React element or you can say it is a js Object  which have keys like props children and all or that.
// props: {
//     children: "Hello World from React",
//     id: "heading",
//     xyz: "abc"}


//nested structure or tags in react

//let's say this one:
{/* <div id="parent">
    <div id="child">
        <h1>Hello World</h1>
        Gourav sarkar
        <h2>Hello ji</h2>

    </div>
</div> */}
let gname="Gourav"

const nestedTags=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hello world"),gname+" sarkar",
    React.createElement("h2",{},"hello ji")]
))
// to add siblings we use array [] for our children

//to simplify all of this we use jsx (it made our life easy when we have to create html tags in it)

// root.render(nestedTags)


{/* <div id="parent">
    <div id="child">
        <h1>Hello World</h1>
        Gourav sarkar
        <h2></h2>

    </div>
    <div id="child2">
        <h1>Hello World 2</h1>
        Gourav sarkar 2
        <h2><Hello JI 2/h2>

    </div>
</div> */}

const nestedTags2=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hello world"),gname+" sarkar",React.createElement("h2",{},"hello ji")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"hello world2"),gname+" sarkar2",React.createElement("h2",{},"hello ji2")])]
)
root.render(nestedTags2)
