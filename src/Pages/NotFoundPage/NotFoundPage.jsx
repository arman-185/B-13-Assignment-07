import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.title}>Page Not Found</h2>
            <p style={styles.text}>
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link to="/" style={styles.button}>
                Go Back Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        textAlign: 'center',
        padding: '20px',
    },
    code: {
        fontSize: '100px',
        margin: '0',
        color: '#244d3f',
    },
    title: {
        fontSize: '28px',
        margin: '10px 0',
        color: '#111827',
    },
    text: {
        fontSize: '16px',
        color: '#6b7280',
        maxWidth: '400px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#244d3f',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
    },
};

export default NotFoundPage;