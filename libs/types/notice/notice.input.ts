import { Direction } from '../../enums/common.enum';
import { NoticeCategory } from '../../enums/notice.enum';
import { TotalCounter } from '../product/product';

export interface Notice {
	noticeCategory: NoticeCategory;
	noticeTitle: string;
	noticeContent: string;
	memberId?: string;
}

interface NISearch {
	noticeRefId?: string;
}

export interface NoticesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: NISearch;
}

export interface Notices {
	list: Notices[];
	metaCounter: TotalCounter[];
}
