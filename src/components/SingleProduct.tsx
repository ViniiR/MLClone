import { useEffect, useState } from 'react';
import '../scss/singleProduct.scss'
import { Link } from 'react-router-dom';

function SingleProduct() {
    const [content, setContent] = useState<SPData>()

    useEffect(() => {
        async function fetchData() {
            const dataArray: SPData = {
                image: await import('../assets/D_Q_NP_2X_928869-MLU69966645745_062023-V.webp'),
                title: 'Smartphone E22 128GB 4g 6,5 HD+ Câmera Dupla 16MP',
                price: '719',
                oldPrice: '1.299',
                percentOFF: '44',
                dividedPrice: '71,90',
            };

            setContent(dataArray);
        }

        fetchData()

    }, []);

    return (
        <>
            <section className='single-product-wrapper'>
                <h2>
                    Oferta do dia
                </h2>
                <Link to={`/product/${content?.title}`}>
                    <section className="img-wrapper-sp">
                        <img src={content?.image.default} alt="" />
                    </section>
                    <h3>
                        {content?.title}
                    </h3>
                    <section className="single-product-price-section">
                        <small className="old-price">
                            R$ {content?.oldPrice}
                        </small>
                        <section className="price-off">
                            <span className="black-color-price"> R$ {content?.price} </span>
                            <span className="green-color-off"> {content?.percentOFF}% OFF </span>
                        </section>
                        <p className="sem-juros-p">
                            em <span className='green-color-sem-juros'> 10x R$ {content?.dividedPrice} sem juros </span>
                        </p>
                    </section>
                    <p className="frete-gratis-full">
                        Frete grátis FULL
                    </p>
                </Link>
                <Link to="/search?q=allProducts" className='single-product-footer'>
                    <p>Ver todas as ofertas</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </Link>
            </section>
        </>
    );
}

export default SingleProduct;
