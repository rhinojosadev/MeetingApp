import { useEffect } from 'react';

import styles from './popup.module.css'

import { usePopup } from './hooks/usePopup';


const CloseBtn = ({ onClick, info }) => {
    return (
        <span className={styles.popup__close} onClick={(e) => onClick(e, info)}>
            <svg focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
        </span>
    )
}

export const Popup = ({day, calendar}) => {

    const { popUpInfo, handlePopUpClose, getCurrentPopUpValue } = usePopup();

    useEffect(() => {
        getCurrentPopUpValue(calendar, day);
    }, [day,calendar,getCurrentPopUpValue]);

    if ( !popUpInfo ) { return null; }
    
    return (
        <>
            { popUpInfo.displayPopup && (
                <div className={styles.popup}>
                    <CloseBtn onClick={handlePopUpClose} info={popUpInfo} />
                    <div className={styles.popup__content}>
                        <div className={styles.popup__content_row}>
                            <p><strong>Date</strong></p>
                            <span>{popUpInfo.date.replaceAll('-','/')} </span>
                        </div>

                        <div className={styles.popup__content_row}>
                            <p><strong>Name</strong></p>
                            <span>{popUpInfo.name} </span>
                        </div>
                        <div className={styles.popup__content_row}>
                            <p><strong>Description</strong></p>
                            <span>{popUpInfo.description} </span>
                        </div>
                        <div className={styles.popup__content_row}>
                            <p><strong>Attendees</strong></p>
                            <span>{popUpInfo.attendees} </span>
                        </div>
                    </div>
        
                </div>
            )}
        </>

    );
}