import "./card.css";
// import '../../src/styles/cards.module.css'

export default function Cards() {
    return (
        <div className='container mx-auto'>
            <div className='card-wrapper flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-1'>
                <div className="card">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo molestiae earum est repellat nam, pariatur perferendis dignissimos? Eius, tempora fuga?</p>
                    <a href="#">get started</a>
                </div>
                <div className='card'>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo molestiae earum est repellat nam, pariatur perferendis dignissimos? Eius, tempora fuga?</p>
                    <a href="#">get started</a>
                </div>
                <div className='card'>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo molestiae earum est repellat nam, pariatur perferendis dignissimos? Eius, tempora fuga?</p>
                    <a href="#">get started</a>
                </div>
            </div>
        </div>
    )
}
