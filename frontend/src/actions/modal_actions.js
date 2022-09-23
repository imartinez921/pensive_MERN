export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (formType, props=null) => {
    console.log('OPENMODEL PROPS', props)
    return {
    type: OPEN_MODAL,
    modal: {
        type: formType,
        props
    }
}};

export const closeModal = () => ({
    type: CLOSE_MODAL
}); 

