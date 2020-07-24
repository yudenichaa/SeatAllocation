import { connect } from "react-redux";
import {
    setMembers,
    updateMember,
    deleteMember,
    freePlaces,
    fillPlaces,
    clearAll,
    loadSectorsData
} from "../reducers/slices/sectorsSlice";
import { setFontSize } from "../reducers/slices/fontSizeSlice";
import Menu from "../components/Menu";

const mapStateToProps = state => ({
    sectors: state.sectors,
    fontSize: state.fontSize
});

const mapDispatchToProps = {
    setMembers,
    updateMember,
    deleteMember,
    freePlaces,
    fillPlaces,
    clearAll,
    loadSectorsData,
    setFontSize
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);