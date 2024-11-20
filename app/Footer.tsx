import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useIsMobile from './hooks/useIsMobile';

export const Footer: React.FC = () => {
    const isMobile = useIsMobile();
    return (
        <footer style={styles.footer}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', color: 'black', fontSize: isMobile ? 20 : 40 }}>
                Built with
                <FontAwesomeIcon
                    icon={faHeart}
                    color="red"
                    style={{ width: isMobile ? 20 : 40, height: isMobile ? 20 : 40, verticalAlign: 'middle' }}
                />
                by <strong>Bitcoin OG</strong>
            </p>

        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center' as const,
        padding: '1rem',
        position: 'relative' as const,
        bottom: 0,
        width: '100%',
    },
    text: {
        margin: 0,
        color: '#333',
        fontSize: '0.9rem',
    },
};

