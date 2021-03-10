import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "./ModalForm.css";

function getModalStyle() {
    const top = 99;
    const left = 99;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 370,
        height: 700,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        padding: theme.spacing(0, 4, 6),
    },
    margin: {
        // margin: theme.spacing(1),
    },
    img: {
        width: "30%",
        height: "auto",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: 164,
    },
}));

export const ModalForm = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="modalForm" align="center">
            <br></br>
            <Button id="add-pet-btn" variant="contained" size="large" onClick={handleOpen} disableElevation>
                Agregar
      </Button>
            <Modal aria-labelledby="modal-pet-title" open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div align="center">
                        <div align="right">
                            <br></br>
                            <IconButton aria-label="delete" className={classes.margin} onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <h3 id="text-subtitle">Registro veterinario</h3>
                        <h6 id="text-subtitle">Ingresa los datos de tu nuevo registro</h6>
                        <TextField id="input-name-vaccine" label="Nombre vacuna" style={{ margin: 8 }}
                            variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />
                        <br></br>
                        <TextField id="input-type" label="Vacuna" style={{ margin: 8 }}
                            variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />
                        <br></br>
                        <TextField id="registration-date-input" label="Fecha de registro" type="date" defaultValue="2021-01-01" variant="outlined" className={classes.textField}
                            InputLabelProps={{ shrink: true, }} />
                        <TextField id="next-date-input" label="Fecha de registro" type="date" defaultValue="2021-02-01" variant="outlined" className={classes.textField}
                            InputLabelProps={{ shrink: true, }} />
                        <TextField id="outlined-multiline-static" multiline rows={10} defaultValue="Descripción de la vacuna..." variant="outlined"
                            fullWidth style={{ margin: 10 }} />
                        <pre></pre>
                        <Button id="save-btn" variant="contained" size="large" edge="end">Guardar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}