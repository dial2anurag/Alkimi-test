import React from 'react';
import styles from '../style';

function Marquee() {
  return(
        <div className={styles.padding}>
            <div className={`marquee gradient-bg-image !max-w-full`}>
                <div className="track">
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                </div>
            </div>
        </div>
    );
}
export default Marquee