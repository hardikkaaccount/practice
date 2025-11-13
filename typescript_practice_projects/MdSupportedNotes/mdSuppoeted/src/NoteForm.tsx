import { Link } from "react-router-dom";
import { useRef } from "react";
import { Form, Stack,  Col, Row, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import type {NoteData} from "./App";
import { useState } from "react";
import type { Tag } from "./App";

type NoteFormProps = {
    onSubmit: (data: NoteData) => void;
}

export function NoteForm({ onSubmit }: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        });
    }

  return <Form onSubmit={handleSubmit}>
    <Stack gap={4}>
        <Row>
            <Col>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} type="text" placeholder="Enter title" required/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Form.Group controlId="markdown" className="mb-2">
                <Form.Label>Body</Form.Label>
                <Form.Control ref={markdownRef} placeholder="Enter title" required as="textarea" rows={15}/>
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="primary">Save</Button>
                <Link to=".."><Button type="button" variant="secondary">Cancel</Button></Link>
            </Stack>
        </Row>
    </Stack>
  </Form>;
}
