import { connect } from "react-redux";
import Sector from "../components/Sector";

const mapStateToProps = state => ({
    fontSize: state.fontSize
});

export default connect(mapStateToProps)(Sector);
