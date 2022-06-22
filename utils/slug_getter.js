import {lodash as _} from "lodash-es";

const slug_getter = (val) => {
    let slug = _.trim(val)
    slug = _.compact(_.split(slug, '/'))
    return slug.pop()
}

export default slug_getter
