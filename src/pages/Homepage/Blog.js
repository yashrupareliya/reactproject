import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
    return (
        <div>

        <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="./index.html"><img src="asset/img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./shop-grid.html">Shop</a></li>
                                <li><a href="/">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="active"><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                <li><a href="/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>


            <section className="breadcrumb-section set-bg" data-setbg="asset/img/breadcrumb.jpg" style={{ backgroundImage: `url(${"./../../asset/img/breadcrumb.jpg"})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Blog</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit"><span className="icon_search"></span></button>
                                    </form>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li><a href="/">All</a></li>
                                        <li><a href="/">Beauty (20)</a></li>
                                        <li><a href="/">Food (5)</a></li>
                                        <li><a href="/">Life Style (9)</a></li>
                                        <li><a href="/">Travel (10)</a></li>
                                    </ul>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Recent News</h4>
                                    <div className="blog__sidebar__recent">
                                        <a href="#" className="blog__sidebar__recent__item">
                                            <div className="blog__sidebar__recent__item__pic">
                                                <img src="asset/img/blog/sidebar/sr-1.jpg" alt="" />
                                            </div>
                                            <div className="blog__sidebar__recent__item__text">
                                                <h6>09 Kinds Of Vegetables Protect The Liver</h6>
                                                <span>MAR 05, 2019</span>
                                            </div>
                                        </a>
                                        <a href="#" className="blog__sidebar__recent__item">
                                            <div className="blog__sidebar__recent__item__pic">
                                                <img src="asset/img/blog/sidebar/sr-2.jpg" alt="" />
                                            </div>
                                            <div className="blog__sidebar__recent__item__text">
                                                <h6>Tips You To Balance Nutrition Meal Day </h6>
                                                <span>MAR 05, 2019</span>
                                            </div>
                                        </a>
                                        <a href="#" className="blog__sidebar__recent__item">
                                            <div className="blog__sidebar__recent__item__pic">
                                                <img src="asset/img/blog/sidebar/sr-3.jpg" alt="" />
                                            </div>
                                            <div className="blog__sidebar__recent__item__text">
                                                <h6>4 Principles Help You Lose Weight With Vegetables</h6>
                                                <span>MAR 05, 2019</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Search By</h4>
                                    <div className="blog__sidebar__item__tags">
                                        <a href="/">Apple</a>
                                        <a href="/">Beauty</a>
                                        <a href="/">Vegetables</a>
                                        <a href="/">Fruit</a>
                                        <a href="/">Healthy Food</a>
                                        <a href="/">Lifestyle</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-2.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">6 ways to prepare breakfast for 30</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-3.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">Visit the clean farm in the US</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-1.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">Cooking tips make cooking simple</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-4.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">Cooking tips make cooking simple</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-4.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">The Moment You Need To Remove Garlic From The Menu</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="asset/img/blog/blog-6.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                                <li><i className="fa fa-comment-o"></i> 5</li>
                                            </ul>
                                            <h5><a href="/">Cooking tips make cooking simple</a></h5>
                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                                quaerat </p>
                                            <a href="#" className="blog__btn">READ MORE <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="product__pagination blog__pagination">
                                        <a href="/">1</a>
                                        <a href="/">2</a>
                                        <a href="/">3</a>
                                        <a href="/"><i className="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer spad" id="footersection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <a href="./index.html"><img src="asset/img/logo.png" alt="" /></a>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">About Our Shop</a></li>
                                    <li><a href="/">Secure Shopping</a></li>
                                    <li><a href="/">Delivery infomation</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/">Who We Are</a></li>
                                    <li><a href="/">Our Services</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Innovation</a></li>
                                    <li><a href="/">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text"><p>
                                    Copyright ©<script>document.write(new Date().getFullYear());
                                    </script>2022 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p></div>
                                <div className="footer__copyright__payment"><img src="asset/img/payment-item.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}
export default Blog;