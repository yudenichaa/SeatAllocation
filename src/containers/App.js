import { connect } from "react-redux";
import App from "../components/App";
import { setMember } from "../reducers/slices/sectorsSlice";

const mapStateToProps = state => ({
    sectors: state.sectors
});

const mapDispatchToProps = { setMember };

export default connect(mapStateToProps, mapDispatchToProps)(App);