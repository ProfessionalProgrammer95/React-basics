import React from "react";

class Screen5 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabItem : "home"
        }
    }

toggleTab(val) {
        this.setState({
            tabItem:val
        })
}


render() {
    return(
        <div>
            <h1>Tab Switching using state</h1>
        

        <nav className="tab">
            <a onClick={() => this.toggleTab('home')} href="#">HOME</a>
            <a onClick={() => this.toggleTab('about')} href="#">About</a>
            <a onClick={() => this.toggleTab('services')} href="#">Services</a>
            <a onClick={() => this.toggleTab('jobs')} href="#">Jobs</a>
            <a onClick={() => this.toggleTab('products')} href="#">Products</a>
        </nav>

        <section className="container">
        {
            this.state.tabItem === "home" ? (
                <div id="home">
                    <h1>Home Section</h1>
                </div>
            ) : null
        }
        {
            this.state.tabItem === "about" ? (
                <div id="about">
                    <h1>About Section</h1>
                </div>
            ) : null
        }
        {
            this.state.tabItem === "services" ? (
                <div id="services">
                    <h1>Services Section</h1>
                </div>
            ) : null
        }
        {
            this.state.tabItem === "jobs" ? (
                <div id="jobs">
                    <h1>JOBS Section</h1>
                </div>
            ) : null
        }
        {
            this.state.tabItem === "products" ? (
                <div id="products">
                    <h1>Products Section</h1>
                </div>
            ) : null
        }
    </section>
    </div>
    )
    
}
}

export default Screen5
