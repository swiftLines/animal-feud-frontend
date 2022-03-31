function EvidenceCard({post, postThread, user, handleAddEvidence}) {
  return(<>
    {post.notes}
    <br />
    {post.source}
  </>)
}
export default EvidenceCard;