import {changeSearchCriteria, changeSortCriteria,
     changeSearchText,setData, dataIsLoaded, isLoading,
      setRelatedDataLoaded, setRelatedData, fetchDataFunction, getRelatedData} from "../actions/actions";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('change search criteria', () => {
    it('should create an action change search criteria', () => {
      const searchCriteria = 'title'
      const expectedAction = {
        type: 'CHANGE_SEARCH_CRITERIA',
        searchCriteria
      }
      expect(changeSearchCriteria(searchCriteria)).toEqual(expectedAction)
    })
  })

  describe('change sort criteria ', () => {
    it('should create an action change sort criteria', () => {
      const sortCriteria = 'vote_average'
      const expectedAction = {
        type: 'CHANGE_SORT_CRITERIA',
        sortCriteria
      }
      expect(changeSortCriteria(sortCriteria)).toEqual(expectedAction)
    })
  })

  describe('change search text ', () => {
    it('should create an action change search text', () => {
      const searchText = 'kill'
      const expectedAction = {
        type: 'CHANGE_SEARCH_TEXT',
        searchText
      }
      expect(changeSearchText(searchText)).toEqual(expectedAction)
    })
  })

  describe('set data ', () => {
    it('should create an action set data', () => {
      const data = 'data'
      const expectedAction = {
        type: 'FETCHED_DATA',
        data
      }
      expect(setData(data)).toEqual(expectedAction)
    })
  })

  describe('data is loaded ', () => {
    it('should create an action data is loaded', () => {
      const isLoaded = false
      const expectedAction = {
        type: 'IS_LOADED',
        isLoaded
      }
      expect(dataIsLoaded(isLoaded)).toEqual(expectedAction)
    })
  })

  describe('data is loading ', () => {
    it('should create an action data is loading' ,() => {
      const isDataLoading = false
      const expectedAction = {
        type: 'IS_LOADING',
        isLoading:isDataLoading
      }
      expect(isLoading(isDataLoading)).toEqual(expectedAction)
    })
  })

  describe('related data is loaded ', () => {
    it('should create an action related data is loaded', () => {
      const isRelatedDataLoaded = false
      const expectedAction = {
        type: 'IS_RELATED_DATA_LOADED',
        isRelatedDataLoaded
      }
      expect(setRelatedDataLoaded(isRelatedDataLoaded)).toEqual(expectedAction)
    })
  })

  describe('set related data', () => {
    it('should create an action change set related data', () => {
      const relatedData = 'data'
      const expectedAction = {
        type: 'RELATED_DATA',
        relatedData
      }
      expect(setRelatedData(relatedData)).toEqual(expectedAction)
    })
  })


  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
    it('creates actions after and before fetching has done', () => {
      fetchMock.getOnce('http://react-cdp-api.herokuapp.com/movies?search=kill&searchBy=title&limit=50', {
        body: { data: ['data'],isLoading:true,isLoaded:false },
        headers: { 'content-type': 'application/json' }
      })
      const expectedActions = [
        { type: 'IS_LOADING', isLoading:true},
        { type: 'FETCHED_DATA',  data: ['data'] },
        {type:'IS_LOADED',isLoaded:true},
        {type:'IS_LOADING',isLoading:false}
      ]
      const store = mockStore({ data: [],isLoading:false});
      return store.dispatch(fetchDataFunction("http://react-cdp-api.herokuapp.com/movies?search=kill&searchBy=title&limit=50"))
                .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })


  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
    it('creates actions after and before fetching has done', () => {
      fetchMock.getOnce('http://react-cdp-api.herokuapp.com/movies?search=kill&searchBy=title&limit=50', {
        body: {data:['data']},
        headers: { 'content-type': 'application/json' }
      })
      const expectedActions = [
        { type: 'RELATED_DATA', relatedData:['data']},
        { type: 'IS_RELATED_DATA_LOADED',  isRelatedDataLoaded:true },
      ]
      const store = mockStore({ relatedData: [],isRelatedDataLoaded:false});
      return store.dispatch(getRelatedData("http://react-cdp-api.herokuapp.com/movies?search=kill&searchBy=title&limit=50"))
                .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
