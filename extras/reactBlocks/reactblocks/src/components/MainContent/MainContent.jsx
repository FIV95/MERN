import React from 'react';
import styles from './MainContent.module.css';
import SubContent from '../SubContent/SubContent';
import Advertisement from '../Advertisement/Advertisement';

const MainContent = () => {
    return (
        <div className={styles.redBox}>
            <div className={styles.subContentContainer}> {/* Add this div */}
                <SubContent className={styles.subContent}/>
                <SubContent className={styles.subContent}/>
                <SubContent className={styles.subContent}/>
            </div>
            <Advertisement className={styles.advertisement}/>
        </div>
    );
}

export default MainContent