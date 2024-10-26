import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import review from "./20240912_000305_0000.webp";
import PrereviewImageLeft from "./220-SM837746.jpg"; // 
import '@fortawesome/fontawesome-free/css/all.min.css';

const reviews = [
    { id: 1, img: review, text: "অবিশ্বাস্য কোয়ালিটি!" },
    { id: 2, img: review, text: "অসাধারণ ডিজাইন, আমি খুব খুশি!" },
    { id: 3, img: review, text: "খুব আরামদায়ক এবং সুন্দর!" },
    { id: 4, img: review, text: "অবিশ্বাস্য কোয়ালিটি!" },
    { id: 5, img: review, text: "অসাধারণ ডিজাইন, আমি খুব খুশি!" },
    { id: 6, img: review, text: "খুব আরামদায়ক এবং সুন্দর!" },
];

export default function Index() {
    const [currentReview, setCurrentReview] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [expandedTab, setExpandedTab] = useState(null); // State to track expanded FAQ tab

 const [activeTab, setActiveTab] = useState(null);


    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
    
    const handleBulletClick = (index) => {
        setCurrentReview(index);
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Touch handling for swiping
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        } else if (touchEnd - touchStart > 50) {
            // Swipe right
            setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
        }
    };

 
    return (
        <div className={styles.template1}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>শুধুমাত্র আজকের জন্য স্পেশাল অফার - ৩০% ছাড় - প্রিমিয়াম আনারকলি থ্রিপিস</div>
                </div>
                <div className={styles.subtitle}>শুধুমাত্র আজকের জন্য স্পেশাল অফার - ৩০% ছাড় - প্রিমিয়াম আনারকলি থ্রিপিস</div>

                <div className={styles.iframe}>
                    <iframe
                        src="https://www.youtube.com/embed/_XlvEkLqkcc?controls=1&amp;rel=0&amp;playsinline=1&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flanding-page.servicekey.io&amp;widgetid=1"
                        title="YouTube Video"
                    ></iframe>
                    <div className={styles.titleUnderIframe}>রেগুলার প্রাইস ১৬৫০ টাকা। আজকের অফার প্রাইস ১২৫০ টাকা</div>
                </div>

                <div className={styles.containerOfOrderBtn}>
                    <button className={styles.btnOrder}>অর্ডার করুন</button>
                </div>
            </div>

            <div className={styles.container}>
                       <section className={styles.tabsOfFaqs}>
                <div className={styles.tabsOfFaqsBG}>
               
                        <div className={styles.title}>
                            একদম ফ্রি সাইজ। বডি সাইজ ৪৪। সাইজ অনুযায়ী কমিয়ে নিতে পারবেন ৪৪ থেকে ৩২ পর্যন্ত করে নিতে পারবেন।
                        </div>
                        <div className={styles.tabs}>
                            <div className={styles.tab} onClick={() => toggleTab(0)}>
                                <div className={styles.tabtitle}>
                                    <span className={activeTab === 0 ? styles.activeTabTitle : ''}>
                                        কেন আমাদের থেকে প্রিমিয়াম কোয়ালিটি থ্রিপিস ক্রয় করবেন?
                                    </span>
                                    <i className={`fas ${activeTab === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </div>
                                {activeTab === 0 && (
                                    <div className={styles.descibe}>
                                        কাস্টমারদের সন্তুষ্টিঃ যারা ভরসা করে আমাদের থেকে প্রিমিয়াম কোয়ালিটি জামা ক্রয় করেছেন তার কেউ নিরাশ হয়নি, ইনশাআল্লাহ আপনিও হবেন না।
                                    </div>
                                )}
                            </div>
                            <div className={styles.tab} onClick={() => toggleTab(1)}>
                                <div className={styles.tabtitle}>
                                    <span className={activeTab === 1 ? styles.activeTabTitle : ''}>
                                        আপনাদের থ্রিপিস কোয়ালিটি কেমন হবে ?
                                    </span>
                                    <i className={`fas ${activeTab === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </div>
                                {activeTab === 1 && (
                                    <div className={styles.descibe}>
                                        জামা ও ওড়না: ইন্ডিয়ান ওয়েটলেস জর্জেট কাপড়। সেলোয়ার: বাটার ফ্লাই কাপড়। যা আপনাকে মুগ্ধ করবে ইনশাআল্লাহ।
                                    </div>
                                )}
                            </div>
                        </div>
                  
                </div>
            </section>

                <section className={styles.PreviewOfaProduct}>
                    <div className={styles.PreviewOfaProductTtile}>স্বাদে ও পুস্টিগুনে ভরপুর খাবারই একমাত্র উপায়</div>
                    <div className={styles.row}>
                        <div className={styles.PreviewOfaleft}>
                            <img src={PrereviewImageLeft} alt="Preview" />
                        </div>
                        <div className={styles.PreviewOfaright}>
                            <li> <i className="fa-solid fa-right-long"></i><span>যে খাবার বাচ্চারা পছন্দ করে আবার সেটা পুষ্টিগুণেও সেরা তা বাচ্চাদের জন্য সহজ এবং উপকারি</span> </li>
                            <li> <i className="fa-solid fa-right-long"></i><span>যে খাবার বাচ্চারা পছন্দ করে আবার সেটা পুষ্টিগুণেও সেরা তা বাচ্চাদের জন্য সহজ এবং উপকারি</span> </li>
                            <li> <i className="fa-solid fa-right-long"></i><span>যে খাবার বাচ্চারা পছন্দ করে আবার সেটা পুষ্টিগুণেও সেরা তা বাচ্চাদের জন্য সহজ এবং উপকারি</span> </li>
                            <li> <i className="fa-solid fa-right-long"></i><span>যে খাবার বাচ্চারা পছন্দ করে আবার সেটা পুষ্টিগুণেও সেরা তা বাচ্চাদের জন্য সহজ এবং উপকারি</span> </li>
                            <li> <i className="fa-solid fa-right-long"></i><span>যে খাবার বাচ্চারা পছন্দ করে আবার সেটা পুষ্টিগুণেও সেরা তা বাচ্চাদের জন্য সহজ এবং উপকারি</span> </li>
                            {/* Repeat list items as needed */}
                        </div>
                    </div>
                    <div className={styles.btnofOrderbyPreview}>
                        অর্ডার করতে চাই
                    </div>
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.customerReview}>
                    <div className={styles.titleReview}>বুক রিভিউ</div>
                    <div
                        className={styles.customerReviewreviews}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={styles.reviewSlider}
                            style={{
                                transform: `translateX(-${currentReview * (100 / 3)}%)`,
                                transition: 'transform 0.5s ease-in-out', // Smooth transition
                            }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className={styles.customerReviewreview}>
                                    <img src={review.img} alt="Customer Review" />
                                    <p>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.bulletPoints}>
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.bullet} ${currentReview === index ? styles.activeBullet : ''}`}
                                onClick={() => handleBulletClick(index)}
                            >
                                •
                            </span>
                        ))}
                    </div>

                    <div className={styles.containerOfOrderBtn}>
                        <button className={styles.btnOrder}>অর্ডার করতে চাই</button>
                    </div>
                </section>
                <section className={styles.callForNeed}>
                    যে কোন প্রয়োজনে কল করুন 01886238827
                </section>
            </div>
        </div>
    );
}
