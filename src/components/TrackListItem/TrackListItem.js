import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';

class TrackListItem extends Component {
    render() {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <span>{this.props.track.title}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{this.props.track.stage_name}</span>
                    </Grid>
                    <Grid item xs={5}>
                        <span></span>
                    </Grid>  
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(TrackListItem);