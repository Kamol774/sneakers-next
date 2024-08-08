import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const UPDATE_MEMBER_BY_ADMIN = gql`
	mutation UpdateMemberByAdmin($input: MemberUpdate!) {
		updateMemberByAdmin(input: $input) {
			_id
			memberType
			memberStatus
			memberAuthType
			memberPhone
			memberNick
			memberFullName
			memberImage
			memberAddress
			memberDesc
			memberProducts
			memberRank
			memberArticles
			memberPoints
			memberLikes
			memberViews
			memberWarnings
			memberBlocks
			deletedAt
			createdAt
			updatedAt
			accessToken
		}
	}
`;

/**************************
 *        PRODUCT        *
 *************************/

export const UPDATE_PRODUCT_BY_ADMIN = gql`
	mutation UpdateProductByAdmin($input: ProductUpdate!) {
		updateProductByAdmin(input: $input) {
			_id
			productType
			productStatus
			productBrand
			productTitle
			productPrice
			productSize
			productSeason
			productColor
			productViews
			productLikes
			productImages
			productDesc
			memberId
			soldAt
			deletedAt
			createdAt
			updatedAt
		}
	}
`;

export const REMOVE_PRODUCT_BY_ADMIN = gql`
	mutation RemoveProductByAdmin($input: String!) {
		removeProductByAdmin(productId: $input) {
			_id
			productType
			productStatus
			productBrand
			productTitle
			productPrice
			productSize
			productSeason
			productColor
			productViews
			productLikes
			productImages
			productDesc
			memberId
			soldAt
			deletedAt
			createdAt
			updatedAt
		}
	}
`;

/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const UPDATE_BOARD_ARTICLE_BY_ADMIN = gql`
	mutation UpdateBoardArticleByAdmin($input: BoardArticleUpdate!) {
		updateBoardArticleByAdmin(input: $input) {
			_id
			articleCategory
			articleStatus
			articleTitle
			articleContent
			articleImage
			articleViews
			articleLikes
			memberId
			createdAt
			updatedAt
		}
	}
`;

export const REMOVE_BOARD_ARTICLE_BY_ADMIN = gql`
	mutation RemoveBoardArticleByAdmin($input: String!) {
		removeBoardArticleByAdmin(articleId: $input) {
			_id
			articleCategory
			articleStatus
			articleTitle
			articleContent
			articleImage
			articleViews
			articleLikes
			memberId
			createdAt
			updatedAt
		}
	}
`;

/**************************
 *         COMMENT        *
 *************************/

export const REMOVE_COMMENT_BY_ADMIN = gql`
	mutation RemoveCommentByAdmin($input: String!) {
		removeCommentByAdmin(commentId: $input) {
			_id
			commentStatus
			commentGroup
			commentContent
			commentRefId
			memberId
			createdAt
			updatedAt
		}
	}
`;

/**************************
 *         FAQ        *
 *************************/
export const CREATE_FAQ_BY_ADMIN = gql`
	mutation CreateFaq($input: FaqInputDto!) {
		createFaq(input: $input) {
			_id
			faqQuestion
			faqAnswer
			faqType
			createdAt
			updatedAt
			faqStatus
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
			}
		}
	}
`;
export const UPDATE_FAQ_BY_ADMIN = gql`
	mutation UpdateFaq($input: FaqUpdateDto!) {
		updateFaq(input: $input) {
			_id
			faqQuestion
			faqAnswer
			faqType
			faqStatus
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
			}
		}
	}
`;
export const DELETE_FAQ_BY_ADMIN = gql`
	mutation DeleteFaq($input: String!) {
		deleteFaq(input: $input) {
			_id
			faqQuestion
			faqStatus
			faqAnswer
			faqType
		}
	}
`;

/**************************
 *         NOTICE        *
 *************************/
export const CREATE_NOTICE_BY_ADMIN = gql`
	mutation CreateNotice($input: NoticeInputDto!) {
		createNotice(input: $input) {
			_id
			noticeType
			noticeContent
			noticeStatus
			createdAt
			updatedAt
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
				meLiked {
					memberId
					likeRefId
					myFavorite
				}
				meFollowed {
					followingId
					followerId
					myFollowing
				}
			}
		}
	}
`;
export const UPDATE_NOTICE_BY_ADMIN = gql`
	mutation UpdateNotice($input: NoticeUpdateDto!) {
		updateNotice(input: $input) {
			_id
			noticeType
			noticeContent
			noticeStatus
			createdAt
			updatedAt
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
			}
		}
	}
`;
export const DELETE_NOTICE_BY_ADMIN = gql`
	mutation DeleteNotice($input: String!) {
		deleteNotice(input: $input) {
			_id
			noticeType
			noticeContent
			noticeStatus
			createdAt
			updatedAt
		}
	}
`;
/**************************
 *      NOTIFICATION      *
 *************************/

export const CREATE_NOTIFICATION = gql`
	mutation CreateNotification($input: CreateNotificationInput!) {
		createNotification(input: $input) {
			_id
			notificationType
			notificationStatus
			notificationGroup
			notificationTitle
			notificationDesc
			authorId
			receiverId
			productId
			articleId
			createdAt
			updatedAt
		}
	}
`;
