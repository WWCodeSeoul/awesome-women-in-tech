import profileData from '../../../resource/korean_women.json'

const SOCIAL_REGEX = /\s*\[!\[\]\(icons\/(email|facebook|github|google-plus|home|linkedin|naver-blog|naver-cafe|slideshare|twitter)-icon\.png\)\]\((.+?)\)\s*/
const LINK_REGEX = /\[(.+?)\]\((.+?)\)/gm

export const getProfileData = () => {
  return [].concat.apply([], profileData.map(data => {
    return data.body.map(profile => {
      profile.Social = profile.Social
        .split(SOCIAL_REGEX)
        .filter(v => v)
        .map((value, index, processed) => {
          if (!(index%2)) {
            return {
              name: value,
              link: processed[index+1]
            }
          }
          return '';
        })
        .filter(v=>v);
      profile.Description = profile.Description.replace(LINK_REGEX, (match, linkName, href)=>{
        return `<a href="${href}">${linkName}</a>`;
      })
      return profile;
    });
  }));
}
