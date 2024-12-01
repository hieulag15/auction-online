package com.example.auction_web.repository;

import com.example.auction_web.dto.response.AuctionSessionInfoDetail;
import com.example.auction_web.entity.AuctionSession;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionSessionRepository extends JpaRepository<AuctionSession, String>, JpaSpecificationExecutor<AuctionSession> {
    List<AuctionSession> findAuctionSessionByStatusOrderByStartTimeAsc(String status);
    Page<AuctionSession> findAll(Specification<AuctionSession> specification, Pageable pageable);
    List<AuctionSession> findAll(Specification<AuctionSession> specification);

    @Query("SELECT new com.example.auction_web.dto.response.AuctionSessionInfoDetail(" +
            "asession.auctionSessionId, asset.assetDescription, " +
            "asession.startTime, asession.endTime, asession.startingBids, asession.bidIncrement, asession.status) " +
            "FROM AuctionSession asession " +
            "JOIN asession.asset asset " +
            "WHERE asession.auctionSessionId = :auctionSessionId")
    AuctionSessionInfoDetail findAuctionSessionInfoDetailById(@Param("auctionSessionId") String auctionSessionId);


}
