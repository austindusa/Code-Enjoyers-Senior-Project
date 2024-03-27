import { colors } from "../colors";

const styles = {
    container: {
        paddingTop: '3rem',
        paddingBottom: '3rem',
        paddingLeft: '6rem',
        paddingRight: '6rem',
        
        backgroundColor: colors.background,
    },
    headingContainer: {
        paddingLeft: '30rem',
        paddingRight: '30rem',
        paddingBottom: '1rem',
        alignItems: 'center',
        backgroundColor: colors.accent + 50,
    },
    heading: {
        color: colors.text,
        fontSize: '4rem',
      },
      paragraph: {
        color: colors.text,
        fontSize: '1.5rem',
        marginBottom: '1rem',
      },
    outerCardStyle: {
        backgroundColor: colors.secondary,
    },
    iconContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '2rem'
    }
}

export default styles;