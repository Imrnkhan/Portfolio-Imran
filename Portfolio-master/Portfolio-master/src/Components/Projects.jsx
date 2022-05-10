import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
    margin-top: 80px;
    padding-bottom: 40px;

    .items {
        margin: auto;
        padding: 10px;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
`;

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "Paytm Mall",
            desc: "Paytm is a platform where you can engage in financial transactions with other people, businesses, etc., shop for certain products, book flight tickets, hotels, movie tickets, train tickets, etc. It is an eCommerce payment system. Paytm Mall is an online consumer shopping platform launched by Paytm for its users.",
            demo: null,
            github: "https://paytmmall-clone.netlify.app/",
            main: "/Paytm mall.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
            ],
        },
        {
            id: 2,
            title: "The Home Depot",
            desc: "The Home Depot, Inc., commonly known as Home Depot, is the largest home improvement retailer in the United States, supplying tools, construction products, appliances, and services.",
            demo: null,
            github: "https://the-home-depot.netlify.app/",
            main: "/Home Depot.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
                "reactjs.webp",
            ],
        },
    ];
    return (
        <Proj>
            <h1>Projects</h1>

            <div className="items">
                {data.map((el) => (
                    <div key={el.id}>
                        <ProjectItem el={el}></ProjectItem>
                    </div>
                ))}
            </div>
        </Proj>
    );
}
