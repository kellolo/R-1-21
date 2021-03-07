import React from 'react';
import './style.scss';
import Modal from '@material-ui/core/Modal';



export default props => {
    const contactsList = props;
    //все пробрасывается
    console.log(contactsList);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Ошибка: contactsList.map is not a function
    // const contactsListMake = contactsList.map((el, i) =>
    //     <li key={i} list-style-image="@img/{el.photo}.jpg">{el.name}</li>
    // );
    // как встроить пропс в ссылку для фото?

    const body = (
        <div className="simple-modal-block">
            <h2 id="simple-modal-title">Список контактов</h2>
            {/* <ul id="simple-modal-content">
                {contactsListMake}
            </ul> */}
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Контакты
            </button>
            <Modal
                className="simple-modal-container"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-content"
            >
                {body}
            </Modal>
        </div>
    );
}