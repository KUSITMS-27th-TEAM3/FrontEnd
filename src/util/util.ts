export const mappingTag = (tags: string[]) => {
  if (tags.length === 0) {
    return [];
  }
  return tags.map((tag) => {
    switch (tag) {
      case 'CHEERFUL':
        return '유쾌함';
      case 'PROUD':
        return '자랑스러움';
      case 'COMFORTABLE':
        return '편안함';
      case 'COZY':
        return '아늑함';
      case 'HAPPY':
        return '행복함';
      case 'JOY':
        return '즐거움';
      case 'MISS':
        return '그리움';
      case 'LONELY':
        return '외로움';
      case 'LOVELY':
        return '사랑스러움';
      case 'TOUCHING':
        return '감동적';
      default:
        return '태그없음';
    }
  });
};
