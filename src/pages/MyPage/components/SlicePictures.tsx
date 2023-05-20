import styled from "styled-components";
import * as API from '../../../api/API';
import { useEffect, useState } from 'react';
import Spinner from "../../../components/Spinner";

interface GridItem {
    gridNum: number;
    check: boolean;
}

const SlicePictures = () => {
    const imageSrc = "/img/마이페이지배경.jpg";

    const [checkList, setCheckList] = useState<GridItem[]>([]);
    const [isloading, setLoading] = useState(true);

    const getTF = async () => {
        const data = await API.get('/grid');
        const checkListData = data.gridCheckList || [];
        setCheckList(checkListData);
        setLoading(false);
    }

    useEffect(() => {
        getTF();
    }, []);

    // if (isloading) {
    //     return <Spinner />;
    // }

    return (
        <ContentWrapper>
            <img src={imageSrc} alt="sliceImage" />
            <GridContainer>

                {/* {checkList.map((item) => (
                    <div
                        key={item.gridNum}
                        className={`grid-item-${item.check ? 'yes' : 'no'}`}
                        id={item.gridNum.toString()}
                    ></div>

                ))}
                <div className="grid-item-no"></div> */}

                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-yes" />

                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-yes" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />
                <div className="grid-item-no" />

            </GridContainer>
        </ContentWrapper>
    )
}
export default SlicePictures;

const ContentWrapper = styled.div`
    // border : 1px solid black;
    width : 900px;
    position: relative;
    overflow: hidden;

    img {
        width : 100%;
        height : 100%;
        // position: absolute;
    }
`
const GridContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);

    position : absolute;
    top : 0;
    left : 0;
    z-index: 1;
    width : 100%;
    height : 100%;
    box-sizing: border-box;

    div.grid-item-yes {
        border: 3px solid white;
    }
    div.grid-item-no {
        border: 3px solid white;
        background-color : rgb(0,0,0,0.7);
`