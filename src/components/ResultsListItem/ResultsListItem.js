import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';
import { Howl } from 'howler';

class ResultsListItem extends Component {
    state = {
        soundOff: true,
    }

    constructor(props) {
        super(props);
        console.log('PATH TEST:', props.track.path);

        this.sound = new Howl({
            src: [props.track.path]
        });

        console.log(this.sound);
    }

    playSong = () => {

        if (this.state.soundOff) {
            this.sound.play();
        } else {
            this.sound.stop();
        }

        this.setState({
            soundOff: !this.state.soundOff,
        });
    }

    render() {

        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <button onClick={this.playSong}>PLAY</button>
                    </Grid>
                    <Grid item xs={3}>
                        <span>{this.props.track.title}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{this.props.track.stage_name}</span>
                    </Grid>  
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ResultsListItem);