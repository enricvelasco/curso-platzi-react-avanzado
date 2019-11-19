import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/list-of-photocards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
