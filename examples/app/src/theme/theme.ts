import { blue, deepPurple } from '@mui/material/colors'
import { createTheme, alpha } from '@mui/material/styles'

export const appPrimaryColor = deepPurple[800]
export const appSecondaryColor = blue[800]
export const darkIdleColor = 'rgba(0, 0, 0, 0.3)'
export const darkHoverColor = 'rgba(0, 0, 0, 0.4)'
export const darkActiveColor = 'rgba(0, 0, 0, 0.4)'
export const lightIdleColor = 'rgba(255, 255, 255, 0.12)'
export const lightHoverColor = 'rgba(255, 255, 255, 0.2)'
export const lightActiveColor = 'rgba(255, 255, 255, 0.3)'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
    xxxl: true
    xxxxl: true
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2560,
      xxxxl: 3840,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: appPrimaryColor,
    },
    secondary: {
      main: appSecondaryColor,
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha('#ffffff', 0.6),
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'rgba(0, 0, 0, 0.87)',
        },
        standardSuccess: {
          color: 'rgb(30, 70, 32)',
        },
        standardError: {
          color: 'rgb(97, 26, 21)',
        },
        standardWarning: {
          color: 'rgb(102, 60, 0)',
        },
        standardInfo: {
          color: 'rgb(13, 60, 97)',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiAutocomplete-inputRoot': {
            height: 'auto !important',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha('#000000', 0.12),
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiChip-root': {
            backgroundColor: lightIdleColor,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          color: '#ffffff',
          borderRadius: '9999px',
        },
        text: {
          borderRadius: '9999px',
          padding: '12px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          border: 'none',
          borderColor: 'transparent',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            boxShadow: 'none',
            border: 'none',
            borderColor: 'transparent',
            backgroundColor: lightHoverColor,
          },
        },
        contained: {
          borderRadius: '9999px',
          padding: '12px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          border: 'none',
          borderColor: 'transparent',
          boxShadow: 'none',
          // backdropFilter: 'sepia(1)',
          backgroundColor: lightIdleColor,
          '&:hover': {
            boxShadow: 'none',
            border: 'none',
            borderColor: 'transparent',
            backgroundColor: lightHoverColor,
          },
        },
        outlined: {
          borderRadius: '9999px',
          padding: '12px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: 'none',
          // backdropFilter: 'sepia(1)',
          backgroundColor: 'transparent',
          '&:hover': {
            boxShadow: 'none',
            borderColor: 'transparent',
            backgroundColor: lightHoverColor,
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
          borderRadius: '23px',
          background: 'transparent',
        },
        // contained: {
        //   boxShadow: 'none',
        //   border: 'none',
        //   borderRadius: '23px',
        //   background: 'transparent',
        //   '&:hover': {
        //     boxShadow: 'none',
        //     border: 'none',
        //     borderRadius: '23px',
        //     backgroundColor: 'rgba(0, 0, 0, 1)',
        //   },
        // },
        firstButton: {
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          border: 'none',
          borderColor: 'transparent !important',
          marginBottom: '1px',
          height: '46px',
        },
        middleButton: {
          border: 'none',
          borderColor: 'transparent !important',
          marginTop: '0px',
          marginBottom: '1px',
          height: '46px',
        },
        lastButton: {
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          border: 'none',
          borderColor: 'transparent !important',
          marginTop: '0px',
          height: '46px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '23px',
          backdropFilter: 'none',
          backgroundColor: alpha('#000000', 0.12),
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0, // Align with the card's border
            left: 0, // Align with the card's border
            right: 0, // Align with the card's border
            bottom: 0, // Align with the card's border
            borderRadius: '0px',
            boxShadow: 'none',
            pointerEvents: 'none',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 16,
          paddingBottom: '16px !important',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontWeight: 600,
          fontSize: '1rem',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: lightHoverColor,
          },
          '&.Mui-focusVisible': {
            backgroundColor: lightIdleColor,
          },
        },
        clickable: {
          '&:hover': {
            backgroundColor: lightHoverColor,
          },
        },
        deletable: {
          '&:focus': {
            backgroundColor: lightIdleColor,
          },
        },
        filled: {
          backgroundColor: lightIdleColor,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(15px)', // Extra blur over backdrop
          backgroundColor: alpha('#FFFFFF', 0.18), // Will blend with Card
          border: 'none', // Will use Card border
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: '100%',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          paddingTop: '8px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          height: 1,
        },
        vertical: {
          height: '100%',
          width: 1,
          borderBottom: 'none',
          borderRight: '1px solid rgba(255, 255, 255, 0.2)',
        },
        // horizontal: {
        //   paddingTop: '8px',
        //   borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        //   height: 1,
        // },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha('#ffffff', 0.5),
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 36,
          height: 36,
          backgroundColor: alpha('#ffffff', 0.1),
          '&:hover': {
            backgroundColor: alpha('#ffffff', 0.3),
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            height: '46px',
          },
          '&.MuiInputBase-multiline': {
            height: 'auto',
            padding: 0,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.MuiTextField-root': {
            '& .MuiOutlinedInput-root': {
              '&.MuiInputBase-multiline': {
                overflow: 'hidden',
                '& .MuiOutlinedInput-input': {
                  padding: '12px 12px',
                },
              },
            },
          },
          border: 'none',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginTop: -5,
          '&.Mui-focused': {
            backgroundColor: lightHoverColor,
            padding: '0px 6px',
            color: 'white',
            borderRadius: '9999px',
            marginTop: 1,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          '&.Mui-selected': {
            color: '#ffffff',
            textAlign: 'center',
            borderRadius: '9999px',
            backgroundColor: alpha('#FFFFFF', 0.8),
          },
        },
        // roundedTop: {
        //   borderTopLeftRadius: '16px',
        //   borderTopRightRadius: '16px',
        // },
        // roundedBottom: {
        //   borderBottomLeftRadius: '16px',
        //   borderBottomRightRadius: '16px',
        // },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: alpha('#ffffff', 0.1),
          },
          '&.Mui-selected': {
            backgroundColor: alpha('#ffffff', 0.1),
            pointerEvents: 'none',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
        },
        secondary: {
          fontWeight: 600,
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: '20px',
          backgroundColor: alpha('#808080', 0.25),
          backdropFilter: 'blur(20px)',
          paddingLeft: '8px',
          paddingRight: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: -1, // Align with the card's border
            left: -1, // Align with the card's border
            right: -1, // Align with the card's border
            bottom: -1, // Align with the card's border
            borderRadius: '23px',
            boxShadow: 'inset 0px 2px 0px 0px rgba(255,255,255,0.1)',
            pointerEvents: 'none',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '23px',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: alpha('#ffffff', 0.1),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: 'none',
          position: 'relative',
          '&:hover': {
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-disabled': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.0)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '23px',
          backgroundImage: 'none',
          backgroundColor: alpha('#808080', 0.25),
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        marks: false,
      },
      styleOverrides: {
        root: {
          marginLeft: '11px',
          width: 'calc(100% - 22px)',
        },
        thumb: {
          height: 28,
          width: 28,
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
          '&:focus, &:hover, &.Mui-active': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          },
        },
        track: {
          height: 28,
          border: 'none',
          borderRadius: '9999px 0px 0px 9999px',
          marginLeft: -14,
          paddingRight: 14,
          boxShadow: 'inset 0px 1px 0px 0px rgba(255,255,255,0.1)',
        },
        rail: {
          backgroundColor: darkIdleColor,
          opacity: 1,
          borderRadius: '9999px',
          padding: '4px 4px',
          height: 28,
          border: 'none',
          fontWeight: 500,
          boxShadow:
            'inset 0px 1px 2px 1px rgb(0 0 0 / 15%), rgb(255 255 255 / 8%) 0px 1px 0px 0px',
        },
        valueLabel: {
          backgroundColor: darkIdleColor,
          boxShadow: '0 0px 10px rgba(0, 0, 0, 0.3)',
          borderColor: alpha('#FFFFFF', 0.08),
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '9999px',
          '&::before': {
            content: 'none', // Removes the default arrow (caret)
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          padding: '24px 0',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: '0px 4px',
          overflow: 'visible',
          width: '64px',
          height: '28px',
          borderRadius: '9999px',
          backgroundColor: darkIdleColor,
          boxShadow:
            'inset 0px 1px 2px 1px rgb(0 0 0 / 15%), rgb(255 255 255 / 8%) 0px 1px 0px 0px',
        },
        switchBase: {
          transform: 'translateY(-6px)',
          '&.Mui-checked': {
            transform: 'translateX(34px) translateY(-6px)',
            '+.MuiSwitch-track': {
              opacity: 1,
            },
          },
        },
        thumb: {
          height: 22,
          width: 22,
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
          transform: 'translateX(-5px)',
        },
        track: {
          borderRadius: '9999px',
          opacity: 1,
          marginTop: 4,
          height: 20,
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          minHeight: 38,
          padding: 0,
          borderRadius: '9999px',
          color: '#888888',
          textTransform: 'none',
          fontWeight: 600,
          '&.Mui-selected': {
            color: '#ffffff',
            textAlign: 'center',
            borderRadius: '9999px',
          },
          '&:hover': {
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '& .MuiTableCell-root': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        variant: 'fullWidth',
      },
      styleOverrides: {
        root: {
          overflow: 'visible',
          minHeight: 38,
          // backdropFilter: 'sepia(1)',
          backgroundColor: darkActiveColor,
          borderRadius: '9999px',
          padding: '2px 4px',
          height: 44,
          boxShadow:
            'inset 0px 1px 2px 1px rgb(0 0 0 / 15%), rgb(255 255 255 / 8%) 0px 1px 0px 0px',
        },
        flexContainer: {
          overflow: 'visible',
          height: 38,
        },
        scroller: {
          overflow: 'visible !important',
          height: 38,
        },
        indicator: {
          height: 36,
          display: 'block',
          backgroundColor: alpha('#FFFFFF', 0.1),
          boxSizing: 'border-box',
          overflow: 'visible',
          zIndex: 0,
          pointerEvents: 'none',
          borderColor: alpha('#FFFFFF', 0.08),
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '9999px',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: -1, // Align with the card's border
            left: -1, // Align with the card's border
            right: -1, // Align with the card's border
            bottom: -1, // Align with the card's border
            borderRadius: '23px',
            boxShadow: 'inset 0px 1px 0px 0px rgba(255,255,255,0.1)',
            pointerEvents: 'none',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        autoComplete: 'off',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiOutlinedInput-root': {
            // backdropFilter: 'sepia(1)',
            backgroundColor: darkIdleColor,
            borderRadius: '23px',
            padding: '2px 4px',
            border: 'none',
            fontWeight: 500,
            boxShadow:
              'inset 0px 1px 2px 1px rgb(0 0 0 / 15%), rgb(255 255 255 / 8%) 0px 1px 0px 0px',
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused': {
              border: 'none',
              backgroundColor: darkActiveColor,
            },
            '&.Mui-disabled': {
              border: 'none',
              boxShadow: 'none',
              backgroundColor: darkIdleColor,
              color: 'rgba(255, 255, 255, 0.5)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                border: 'none',
                borderColor: 'transparent',
              },
            },
          },
          '& .MuiOutlinedInput.notchedOutline': {
            border: 'none',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255, 255, 255, 0.3)',
          '&.Mui-selected': {
            backgroundColor: lightActiveColor,
            color: '#ffffff',
          },
          '&:hover': {
            backgroundColor: lightHoverColor,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: '8px',
          paddingLeft: '8px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          pointerEvents: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha('#000000', 0.12),
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '8px 16px',
        },
      },
    },
  },
})

export default theme
