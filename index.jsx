const Heading = ()=>{
    return(
        <h1 style={{textAlign:"center",color:"purple"}}>Topics Coverded</h1>
    )
}
// tittle

const Para =()=>{
    return(
        <div style={{backgroundColor:"#E2DFD0"}}>
            <p style={{fontSize:"25px"}}>The following is a list of all the topics we cover in MDN learning area. </p>
            <a href="https://example.com" style={{fontSize:"25px"}}>Getting started with the web</a>
            <br/>
        <p style={{fontSize:"25px"}}>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
        <a href="https://example.com" style={{fontSize:"25px"}}>HTML-Structuring the web</a>
        <br/>
        <p style={{fontSize:"25px"}}>Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).</p>
        <br/>
        <a href="https://example.com" style={{fontSize:"25px"}}>CSS-Styling the web</a>
        <p style={{fontSize:"25px"}}>The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code. A number of content management systems (CMS) fall into this category, including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience Manager, among others.</p>
        </div>
    )
}



const MainBox = ()=>{
    return(
        <div>
            <Heading/>
            <Para/>
        </div>
        
    )
}
ReactDOM.render(<MainBox/> , document.querySelector("#root"));