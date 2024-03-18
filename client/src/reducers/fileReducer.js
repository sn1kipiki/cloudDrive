const SET_FILES = "SET_FILES"
const SET_CURRENT_DIR = "SET_CURRENT_DIR"
const ADD_FILE = "ADD_FILE"
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"
const SET_MENU_DISPLAY = "SET_MENU_DISPLAY"
const PUSHPATH_TO_STACK = "PUSHPATH_TO_STACK"
const PUSH_TO_STACK = "PUSH_TO_STACK"
const DELETE_FILE = 'DELETE_FILE'
const SET_VIEW = 'SET_VIEW'
const SET_PAGE = "SET_PAGE"
const SET_PATH = "SET_PATH"

const defaultState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none',
    menuDisplay: "none",
    dirStack: [],
    view: 'list',
    page: "Dashbord",
    path: "",
    pathStack: []
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return {...state, files: action.payload}
        case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case SET_MENU_DISPLAY: return {...state, menuDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]}
        case SET_VIEW: return {...state, view: action.payload}
        case PUSHPATH_TO_STACK: return {...state, pathStack: [...state.pathStack, action.payload]}
        case SET_PAGE: return {...state, page: action.payload}
        case SET_PATH: return {...state, path: action.payload}
        default:
            return state
    }
}

export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const setCurrentDir= (dir) => ({type: SET_CURRENT_DIR, payload: dir})
export const addFile = (file) => ({type: ADD_FILE, payload: file})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const setMenuDisplay = (menu) => ({type: SET_MENU_DISPLAY, payload: menu})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})
export const setFileView = (payload) => ({type: SET_VIEW, payload})
export const setPage = (page) => ({type: SET_PAGE, payload: page})
export const pushPathToStack = (path) => ({type: PUSHPATH_TO_STACK, payload: path})
export const setPath = (path) => ({type: SET_PATH, payload: path})