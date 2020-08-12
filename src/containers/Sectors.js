import { connect } from "react-redux";
import Sectors from "../components/Sectors";
import { setMember } from "../reducers/slices/sectorsSlice";

const mapStateToProps = state => ({
    sectors: state.sectors
});

const mapDispatchToProps = { setMember };

export default connect(mapStateToProps, mapDispatchToProps)(Sectors);