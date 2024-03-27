import { colors } from "../colors";

const styles = {
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '94.5vh',
    position: 'relative',
    paddingLeft: '7rem'
    
  },
  textBox: {
    justifyContent: 'column',
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
  heroImage: {
    position: 'relative',
    width: '900',
    height: '94.5vh',
  },
  buttonContainerStyle: {
    paddingTop: ".5rem",
  },
  actionButtonStyle: {
    backgroundColor: colors.primary,
    color: colors.text,
  }
  
  
};

export default styles;