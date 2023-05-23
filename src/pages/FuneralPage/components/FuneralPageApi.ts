import * as API from '../../../api/APINotLogin';

type getCardParmas = {
    page: number;
    size?: number;
    activeTags: string[];
};

export const getCardInfo = async ({
    page = 0,
    size = 12,
    activeTags,
}: getCardParmas) => {
    const activeTagsStr = activeTags.join(',');
    console.log(activeTagsStr);
    return await API.get(
        `/funeral?size=${size}&page=${page}&areaTagList=${activeTagsStr}`,
    );
};