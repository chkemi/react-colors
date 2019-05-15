export default {
    root: {
        background: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px',
    },
    delete: {

    },
    deleteIcon: {
        color: 'white',
        background: '#eb3d30',
        position: 'absolute',
        right: '0px',
        top: '0px',
        padding: '10px',
        zIndex: 10,
        opacity: 0,
        fontSize: '40px !important'
    }
};