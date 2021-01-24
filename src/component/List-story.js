import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getFilmDetailsByFilmId } from '../store/actions/films';
import CircularProgress from '@material-ui/core/CircularProgress';
import LastMovieStory from '../component/LastMovie-story';

const useStyles = makeStyles((theme) => ({
    root: {
        left: '35%',
        maxWidth: 360,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
    },
    loading: {
        width: '600px',
        height: '40px',
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        left: '25%'
    }
}));
const ListStory = (props) => {
    const listOfTitle = useSelector(state => state.filmsState.list)
    let date;

    const loading = useSelector(state => state.filmsState.loading)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                loading
                    ? <CircularProgress className={classes.loading} />
                    : <div> <List component="nav" aria-label="main mailbox folders">
                        {(listOfTitle || []).map(list => {
                            return (<ListItem button>
                                <ListItemText primary={list.title} />
                            </ListItem>)
                        })}

                    </List>

                        {(listOfTitle !== undefined && listOfTitle.length > 0) ?
                            <LastMovieStory releaseDate={listOfTitle[0].release_date.getFullYear()} title={listOfTitle[0].title}/> :
                            null}

                    </div>}
            
        </div>
    )
}
export default ListStory